import {  Layout, Navbar , NotFoundPage } from "../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function NotFound() {
  return (
      <Layout title={'404'}>
      <Navbar/>
      <NotFoundPage/>
      </Layout>
  );
};
 
