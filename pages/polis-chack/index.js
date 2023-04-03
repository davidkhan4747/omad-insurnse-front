import { Layout, Navbar ,PolisChack } from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


export async function getStaticProps({ locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Auth = () => {
  return (
    <Layout title="Страхование имущества">
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <PolisChack />
      </Wrapper>
    </Layout>
  );
};

export default Auth;