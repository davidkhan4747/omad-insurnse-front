import {
  AboutInfo,
  Cards,
  Hero,
  Layout,
  Navbar,
  News,
  WrapperTitle,
} from "../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api_url } from "../services/api";
import BreadcrumbsBlock from "../components/common/bread-crumbs/Breadcrumbs";

export default function About(props) {
  const about = props.data;
  
  const { t } = useTranslation();

  return (
    <Layout title={about?.content.meta_title} >
      <Navbar />
        <BreadcrumbsBlock
        breadcrumb={about?.breadcrumb  }
        />
      <Hero />
      <WrapperTitle title={t("common:All_about_the_company")} />
      <Cards data={about?.categories} />
      <AboutInfo dataLeft={about?.content} dataRight={about?.vacancy} />
      <News />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  try{
    const result = await fetch(`${api_url}/about` ,{ headers: {'x-lang': context.locale}});
    const data = await result.json();
    return {
      props: {
        data,
        ...(await serverSideTranslations(context.locale, ["common"])),
      }
    }
  }catch(error){
      return { 
        notFound: true
      }
    }
}