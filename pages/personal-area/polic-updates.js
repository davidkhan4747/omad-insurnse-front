import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalUdates
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
const Uptade  = () => {
  return (
    <Layout title="Продлить полис онлайн" >
      <Navbar />
      <PersonalAreaNav/>
      <PersonalUdates/>


    </Layout>
  );
};

export default Uptade;
