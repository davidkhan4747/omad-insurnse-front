import {
  HeroCase,
  Layout,
  Navbar,
  HeroCaseInsurance
} from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api_url } from "../../services/api";
import CardsCaseInsurance from "../../components/insurance-case/cards/cardscase";
import { ContainerHero } from "../../components/yur-face-page/hero-bg/hero-bg.e";
import { Title, BranDPos } from "../../components/insurance-case/hero/hero.e";
const main_image = "/bg-avto-str.png";
export default function  InsuranceCase (props) {

  const { t } = useTranslation();
  const sliderData = props.data.data;
  console.log(sliderData)
  return (
    <Layout title={t("common:Insurance_case")} >
      <Wrapper> 
        <Navbar onClass="bg-blue" />
        <ContainerHero imgUrl={main_image}>
            <BranDPos>
                {/* <BreadcrumbsBlock/> */}
            </BranDPos>
            <Title>{t("common:Insurance_case")}</Title>
            </ContainerHero>
        <HeroCaseInsurance/>
        <CardsCaseInsurance id="case" data={sliderData} />
      </Wrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { insurance = 1} = context.query;
  try{
    const result = await fetch(`${api_url}/insurance-case/index?id=${insurance == 'undefined' ? 1 : insurance}`,{ headers: {'x-lang': context.locale}});
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