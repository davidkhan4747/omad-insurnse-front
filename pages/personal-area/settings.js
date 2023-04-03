import {
  Layout,
  Navbar,
  PersonalAreaNav,
  Settings
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

const Setting = () => {
  const {t} = useTranslation()
  return (
    <Layout title={t('common:settings')} >
      <Navbar />
      <PersonalAreaNav/>
      <Settings/>


    </Layout>
  );
};

export default Setting;
