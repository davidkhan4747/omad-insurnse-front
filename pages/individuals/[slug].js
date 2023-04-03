import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Layout, Navbar, HeroBg, YurFaceCard} from "../../components";
import { api_url } from "../../services/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";


export default function YurFacePage(props){

  const pageInfo = props.pageInfo.data;
  const insurances = props.insurance.data;

  const breadcrumb = [
    {
      slug: '/',
      title: 'Главный'
    },
    {
      slug: '/individuals/'+pageInfo.link,
      title: pageInfo.name
    }
  ]
  return (
    <>
   
      <Layout title={pageInfo.name} meta_description={pageInfo.meta_description}>
      <Navbar />
      <BreadcrumbsBlock breadcrumb={breadcrumb}/>
      
      {pageInfo ? (
        <HeroBg data={pageInfo} />
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={600} />
        </Stack>
      )}

      <YurFaceCard data={insurances} />
    </Layout>

    </>
    
  );
 

};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const resultPageInfo = await fetch(`${api_url}/category-insurance?slug=${slug}`,{ headers: {'x-lang': context.locale}});
  const resultInsurances = await fetch(`${api_url}/insurance?slug=${slug}`,{ headers: {'x-lang': context.locale}});
  const pageInfo = await resultPageInfo.json();
  const insurance = await resultInsurances.json();
  return {
    props: {
      pageInfo,
      insurance,
      ...(await serverSideTranslations(context.locale, ["common"])),
    }
  }
  try{
  
  }catch(error){
      return { 
        notFound: true
      }
    }
}
