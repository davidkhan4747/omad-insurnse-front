import { FC } from "react";
import { AuthPage, Layout, Navbar } from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { parseCookies } from "nookies";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const Auth  = () => {
  const {t} = useTranslation();
  return (
    <Layout title={t('common:auth')} >
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <AuthPage />
      </Wrapper>
    </Layout>
  );
};

export default Auth;

