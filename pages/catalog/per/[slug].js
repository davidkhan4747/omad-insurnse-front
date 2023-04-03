import { useState } from "react";
import {
  Navbar,
  Hero,
  MultiSliderPartners,
  News,
  WrapperTitle,
  WantKnowM,
  Sale,
  Layout
} from "../../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api_url } from "../../../services/api";
import BreadcrumbsBlock from "../../../components/common/bread-crumbs/Breadcrumbs";

export default function  Partner(props){
  const partnerCategory = props.data.data;
  const pageData = props.pageData
  const { t } = useTranslation();

  return (
    <>
 
        <Layout title={t("common:Property_insurance")} >
          <Navbar />
          <BreadcrumbsBlock breadcrumb={pageData?.breadcrumb} />

          <Hero />
          <WrapperTitle title={t("common:Services")} onClass="view-three" />
  
          <MultiSliderPartners data={partnerCategory} />
     
 
          <WantKnowM data={pageData.want_to_know} />
          <Sale/> 
  
          <News />
        </Layout>

    </>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const result = await fetch(`${api_url}/partners/index` ,{ headers: {'x-lang': context.locale}});
  const resultPage = await fetch(`${api_url}/insurance/find?slug=${slug}` ,{ headers: {'x-lang': context.locale}});
  const data = await result.json();
  const pageData = await resultPage.json();
  return {
    props: {
      data,
      pageData,
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