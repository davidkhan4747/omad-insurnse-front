import {
    Layout,
    MissionComp,
    Navbar,
    News,
  } from "../../components";
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
  import { useTranslation } from "next-i18next";
  import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
  import { api_url } from "../../services/api";
  
  
  export default function Mission (props) {
    const page = props.data.data;
    const { t } = useTranslation();

    const breadcrumb = [
      {
        title : 'Главный',
        slug: '/'
      },
      {
        title : 'О компании',
        slug: '/about'
      },
      {
        title : page?.content.title,
        slug: '/abouts/'+page?.content.slug
      }
    ];
    return (
      <Layout title={page?.content.title}>
        <Navbar />
        <BreadcrumbsBlock breadcrumb={breadcrumb} />
          <MissionComp data={page} />
        <News />
      </Layout>
    );
  };
  
  export async function getServerSideProps(context) {
    const { slug } = context.params;
    const result = await fetch(`${api_url}/about/find?slug=${slug}` ,{ headers: {'x-lang': context.locale}});
    const data = await result.json();
    return {
      props: {
        data,
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
  