import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import {
  Layout,
  Navbar,
  Hero,
  WantInsure,
  WantKnow, 
  Sale,
  News
} from '../components'

export default function Index() { 
  const { t } = useTranslation();

  
  return (
    
    <>
      <Layout title={t('site_name')} >
    
          <Navbar />
          <Hero />
         
          <WantInsure/>
          <WantKnow/>
          <Sale/> 
          <News/>
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}