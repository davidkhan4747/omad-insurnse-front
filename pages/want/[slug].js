import {
  Layout,
  Navbar,
  News,
  WnatKnowS
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { api_url } from "../../services/api";


export default function Mission(props) {
  const want = props.data;
  const links = props.list;

  const breadcrumb = [
    {
      slug: '/',
      title: 'Главный'
    },
    {
      slug: '/want/'+want.data.slug,
      title: want.data.title
    }
  ]
  return (
    <Layout title={want.data.title}>
      <Navbar />
      <BreadcrumbsBlock breadcrumb={breadcrumb} />
      <WnatKnowS links={links.data} data={want?.data}/>
      <News/>
    </Layout>
  );
};
export async function getServerSideProps(context) {

  try{
    const { slug } = context.params;
    const resultData = await fetch(`${api_url}/want/${slug}` , { headers: {'x-lang': context.locale}});
    const resultList = await fetch(`${api_url}/want-to-know` , { headers: {'x-lang': context.locale}});
    const data = await resultData.json();
    const list = await resultList.json();
    return {
      props: {
        data,
        list,
        ...(await serverSideTranslations(context.locale, ["common"])),
      }
  }

  }catch(error){
      return { 
        notFound: true
      }
    }
}