import {
    CardsCase,
    HeroCase,
    Layout,
    Navbar,
    WrapperCategory
  } from "../components";
  import { Wrapper } from "../styles/global-styles.e";
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
  import { useTranslation } from "next-i18next";
  import { api_url } from "../services/api";
  import { ContainerHero } from "../components/yur-face-page/hero-bg/hero-bg.e";
  const main_image = "/bg-avto-str.png";
  import { Title, BranDPos } from "../components/insurance-case/hero/hero.e";
  export default function  InsuranceCase (props) {
    const sliderData = props.data;

    const { t } = useTranslation();
 
    return (
      <Layout title={t("common:polit_market")} >
        <Wrapper>
          <Navbar onClass="bg-blue" />
          <ContainerHero imgUrl={main_image}>
            <BranDPos>
                {/* <BreadcrumbsBlock/> */}
            </BranDPos>
            <Title>{t("common:polit_market")}</Title>
            </ContainerHero>
          
          <WrapperCategory data={sliderData?.categories} />
            <CardsCase id="shop" data={sliderData?.content} />
          </Wrapper>
      </Layout>
    );
  };
  
  export async function getServerSideProps(context) {
  
    try{
      const { insurance = "chastnym-licam"} = context.query;
      const { sortId = null} = context.query;
      const result = await fetch(`${api_url}/insurance/find?slug=${insurance == 'undefined' ? "chastnym-licam" : insurance}${sortId!=null?'&sort_id='+sortId:''}`,{ headers: {'x-lang': context.locale}});
      const data = await result.json();
      return {
        props: {
          data,
          ...(await serverSideTranslations(context.locale, ["common"])),
        }
      }
    }catch(error){
        return { 
          notFound: true
        }
      }
  }