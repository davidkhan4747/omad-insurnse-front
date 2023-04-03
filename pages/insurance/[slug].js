import {
  Layout,
  Navbar,
  MtplInsuranceHome,
  MtplAdventages,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { api_url } from "../../services/api";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { useRouter } from "next/router";
export default function YurFacePage (props){
  const data = props.pageInfo
  console.log(data)
  return (

    <Layout title={data?.content.title}>
      <Navbar />
      {data && (
        <div>
          <BreadcrumbsBlock breadcrumb={data?.breadcrumb } />
          <MtplInsuranceHome data={data.content} />
        </div>
      )}
      {data && (
        <MtplAdventages  data={data.content}/> 
      )}

    </Layout>
  );
};
export async function getServerSideProps(context) {
  try{
    const { slug } = context.params;
    const resultPageInfo = await fetch(`${api_url}/insurance/full?slug=${slug}` , { headers: {'x-lang': context.locale}});
    const pageInfo = await resultPageInfo.json();
    return {
      props: {
        pageInfo,
        ...(await serverSideTranslations(context.locale, ["common"])),
      }
    }
  }catch(error){
      return { 
        notFound: true
      }
    }
}
