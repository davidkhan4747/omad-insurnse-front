import { useEffect, useState } from "react";
import Image from "next/image";
import { GWrapper } from "../../../styles/global-styles.e";
import { Title, Wrapper, BranDPos } from "./hero.e";
import { useRouter } from "next/router";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import { useTranslation } from "next-i18next";
import { ContainerHero } from "../../yur-face-page/hero-bg/hero-bg.e";
import { api } from "../../../services/api";
const main_image = "/bg-avto-str.png";
const HeroCase = ({ idx }) => {
  const { t } = useTranslation();
  const [onlineInsure, setOnlineInsure] = useState(1);
  const [sliderData, setSliderData] = useState();
  const router = useRouter();
  const id  = Object.values(router.query);
  const [magaz , setMagaz] = useState()
  useEffect(() => {
   
    api
      .get("insurance-case/index", { params: { id: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data);
      });
      api
      .get("insurance/find", { params: { id: onlineInsure } })
      .then((res) => {
        setMagaz(res.data);
      });
  
    
  }, [onlineInsure]);
  return (
    <ContainerHero imgUrl={main_image}>
      <BranDPos>
        <BreadcrumbsBlock
          breadcrumb={ idx == "case" ?  sliderData?.breadcrumb :  magaz?.breadcrumb_magazin }
        />
      </BranDPos>

      {idx == "shop" && <Title>{t("common:polit_market")}</Title>}
      {idx == "case" && <Title >Страховой случай</Title>}
    </ContainerHero>
  );
};

export default HeroCase;
