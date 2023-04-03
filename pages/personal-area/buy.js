import {
  Layout,
  Navbar,
  PersonalAreaNav,
  BuyPolis
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
 
export async  function getStaticProps({locale} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}

const Buy = () => {
  return (
    <Layout title="Купить полис онлайн" >
      <Navbar />
      <PersonalAreaNav/>
      <BuyPolis/>


    </Layout>
  );
};

export default Buy;
