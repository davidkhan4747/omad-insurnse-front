import Link from "next/link";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

import {
  CardBody,
  CradTitle,
  CardInfo,
  CardText,
  CardService,
  CardServiceHeading,
  CardServiceText,
  CardServiceBlock,
  CardBtns,
  HorizontalSliderButton,
  CardButton,
  CardBodyContent,
  CardImage,
} from "./CardBlock.e";

import car from "../../../assets/images/Card/CardCar.png";

const CardOffers = ({  }) => {
  // console.log("inner==>>>", item);
  const ArrowIcon = (props) => (
    <svg
      width="47"
      height="16"
      viewBox="0 0 47 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.class}
    >
      <path
        d="M1 7L8.74228e-08 7L-8.74228e-08 9L1 9L1 7ZM46.7071 8.70711C47.0976 8.31659 47.0976 7.68342 46.7071 7.2929L40.3431 0.928936C39.9526 0.538411 39.3195 0.538411 38.9289 0.928936C38.5384 1.31946 38.5384 1.95262 38.9289 2.34315L44.5858 8L38.9289 13.6569C38.5384 14.0474 38.5384 14.6805 38.9289 15.0711C39.3195 15.4616 39.9526 15.4616 40.3431 15.0711L46.7071 8.70711ZM1 9L46 9L46 7L1 7L1 9Z"
        fill={props.fill}
      />
    </svg>
  );
  // const { main_title, main_description, main_image, id ,title_1 ,title_2, title_3,description_1 , description_3,description_2} = item;
  const { t } = useTranslation();
  return (
    <CardBody>
      <CardBodyContent>
        <CardInfo>
          <CradTitle>Акция «Месяц страхования без дополнительной премии»</CradTitle>
          <CardText>13-й месяц в подарок – увеличение сроков страхования по договору КАСКО на один дополнительный месяц бесплатно при оформлении договора страхования имущества.</CardText>

          <br/>
          <CardText>Месяц в подарок по КАСКО и ИФЛ</CardText>
          <CardText>При одновременном заключении 2 договоров: «Базовое КАСКО» «Квартира Экспресс».</CardText>

          {/* <CardService>
            <CardServiceBlock>
              <CardServiceHeading>
                {title_1}
              </CardServiceHeading>
              <CardServiceText>
                { description_1}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{title_2}</CardServiceHeading>
              <CardServiceText>
              {description_2}

              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{title_3}</CardServiceHeading>
              <CardServiceText>
                {description_3}
              </CardServiceText>
            </CardServiceBlock>
          </CardService> */}
          <CardBtns>
          <Link href={`/special-offers-single`} passHref>
            <CardButton>{t("Узнать условия")}</CardButton>
          </Link>
            {/* <HorizontalSliderButton>
              <Link href={`/mtpl-insurance?id=${id}`} passHref>
                <a>
                  <span>{t("common:Learn_more")}</span>
                  <ArrowIcon fill="#F0803D" class="arrow-right" />
                </a>
              </Link>
            </HorizontalSliderButton> */}
          </CardBtns>
        </CardInfo>
        <CardImage>
          <Image src={car} alt="image-test" />
          
          {/* <img src={main_image} alt={main_title} /> */}
        </CardImage>
      </CardBodyContent>
    </CardBody>
  );
};

export default CardOffers;
