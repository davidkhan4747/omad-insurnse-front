import {  useEffect, useState } from "react";
import { useRouter  } from "next/router";
import {
  InsureBtn,
  InsureIndividualsBlock,
  InsureRow,
  InsureTitle,
  InsureTitleBlock,
  PersonDescription,
  PersonTitle,
  Wrapper,
  InsureIndividualsBlockYur,
} from "./want-insure.e";
import { useTranslation } from "next-i18next";
import  Image  from "next/image";
import Ramka from '../../../assets/images/pravki_ru.png'
import { api } from "../../../services/api";
import ArrowIcon from "../../svg/ArrowIcon";
import MultiSliderHome from "../../common/multi-slider/multi-slider-home";


const WantInsure = () => {
  const { t } = useTranslation();
  const router = useRouter()
  const [onlineInsure, setOnlineInsure] = useState("chastnym-licam");
  const [sliderData, setSliderData] = useState([]);
  
  useEffect(() => {
    api.get("category-insurance", { params: { slug: onlineInsure } ,  },{ headers: {'x-lang': router.locale}})
      .then(async (response) => {
          await setSliderData(response.data.data);
    });
  }, [onlineInsure]);
  
  const handlePrivate = () => {
    setOnlineInsure("chastnym-licam");
  };
  const handlePublic = () => {
    setOnlineInsure("yuridicheskim-licam");
  };


  return (
    <>
    <Wrapper>

      <InsureRow>
        <InsureTitleBlock>
          <InsureTitle>{t("common:want_to_insure")}</InsureTitle>
        </InsureTitleBlock>

        <InsureIndividualsBlock className={onlineInsure == "chastnym-licam" ? "active" : ""}>
          <PersonTitle>
            {t("common:home_card_title2_for_individuals")}
          </PersonTitle>
          <PersonDescription className="description">
            {/* В числе наших конкурентных преимуществ – доскональное изучение интересов страхователя таким образом, чтобы оформление страхового договора не требовало существенных временных затрат. */}

          </PersonDescription>
          <InsureBtn onClick={handlePrivate}>
            <Image src={Ramka} alt='dd' />
            <ArrowIcon fill="#F0803D" class={"arrow-left"} />
          </InsureBtn>
        </InsureIndividualsBlock>
        <InsureIndividualsBlockYur
          className={onlineInsure == "yuridicheskim-licam" ? "active" : ""}
        >
          <PersonTitle>
            {t("common:home_card_title3_Legal_entities")}
          </PersonTitle>
          <PersonDescription className="description">
            {/* Корпоративное страхование — наиболее эффективный способ защиты финансовой стабильности предприятия и компенсации непрогнозируемых финансовых расходов */}
          </PersonDescription>
          <InsureBtn onClick={handlePublic}>
            <Image src={Ramka} alt='dd' />

            <ArrowIcon fill="#F0803D" class={"arrow-left"} />
          </InsureBtn>
        </InsureIndividualsBlockYur>
      </InsureRow>
    </Wrapper>
    
    <MultiSliderHome data={sliderData.sub} /></>
  );
};

export default WantInsure;
