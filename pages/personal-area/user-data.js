import {
  Layout,
  Navbar,
  PersonalAreaNav,
  UserData
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

 
export async  function getStaticProps({locale} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
const buy = () => {
  return (
    <Layout title=" Мои данные">
      <Navbar />
      <PersonalAreaNav/>
      <UserData/>


    </Layout>
  );
};

export default buy;
