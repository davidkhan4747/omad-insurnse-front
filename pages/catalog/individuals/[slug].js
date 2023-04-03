import {
  Layout,
  Navbar,
  Hero,
  MultiSlider,
  News,
  WrapperTitle,
  WantKnowM,
  Sale
} from "../../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api_url } from "../../../services/api";
import BreadcrumbsBlock from "../../../components/common/bread-crumbs/Breadcrumbs";

export default function Partner(props) {
 

  const pageData = props.data;
  const { t } = useTranslation();
  return (
    <>
        <Layout title={t("common:Property_insurance")} >
          <Navbar />
        
          <BreadcrumbsBlock key={1} breadcrumb={pageData?.breadcrumb} />

          <Hero />
          <WrapperTitle title={t("common:Services")} onClass="view-three" data={pageData?.categories} />
            <MultiSlider data={pageData?.content} />
          <WantKnowM data={pageData?.want_to_know} />
          <Sale/> 

          {/* <SpecialOffers data={pageData?.promotions} /> */}
          <News/>
        </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { sortId = null} = context.query;
  const result = await fetch(`${api_url}/insurance/find?slug=${slug}${sortId!=null?'&sort_id='+sortId:''}` , { headers: {'x-lang': context.locale}});
  const data = await result.json();
  return {
    props: {
      data,
      sortId,
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
