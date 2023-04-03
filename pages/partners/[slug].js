import {
    Layout,
    Navbar,
    News,
    BanksComp,
  } from "../../components";
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
  import { useTranslation } from "next-i18next";
  import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
  import { api_url } from "../../services/api";
  
  
  export default function Banks(props) {
    const pageInfo = props.pageData.data
    console.log(pageInfo)
    const { t } = useTranslation();
  
    return (
      <Layout title={pageInfo.title + ' | '+ pageInfo.parent.title} >
        <Navbar />
        <BreadcrumbsBlock />
        {!!pageInfo && (
          <BanksComp data={pageInfo} />
        )}
  
        <News/>
      </Layout>
    );
  };
  export async function getServerSideProps(context) {
    try{
      const { slug } = context.params;
      const resultPage = await fetch(`${api_url}/partners/find?slug=${slug}`);
      const pageData = await resultPage.json();
      return {
        props: {
          pageData,
          ...(await serverSideTranslations(context.locale, ["common"])),
        }
      }
    }catch(error){
        return { 
          notFound: true
        }
      }
  }