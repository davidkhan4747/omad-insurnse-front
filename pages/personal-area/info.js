import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaInfo,
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

const Info = () => {
  return (
    <Layout title="Информация" >
      <Navbar />
      <PersonalAreaNav/>
      <PersonalAreaInfo/>


    </Layout>
  );
};

export default Info;
