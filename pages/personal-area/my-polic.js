import {
  Layout,
  Navbar,
  PersonalAreaNav,
  MyPolic,
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

const MyPolics = () => {
  return (
    <Layout title="Мои страховые полиса" >
      <Navbar />
      <PersonalAreaNav/>
      <MyPolic/>


    </Layout>
  );
};

export default MyPolics;
