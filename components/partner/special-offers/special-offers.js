import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowIconRigthLeft from "../../svg/ArrowIconRigthLeft"
import {
  HorizontalSliderButton,
  SpecialLeft,
  SpecialRight,
  SpecialRow,
  Wrapper,
} from "./special-offers.e";
import { GWrapper } from "../../../styles/global-styles.e";
import { SectionTitle } from "../..";
const SpecialOffers = ({ data }) => {
  const { t } = useTranslation();
  
  return (
    <Wrapper>
      <GWrapper>
        <SectionTitle
          title={t("common:Promotions_and_special_offers")}
          color="black"
          classN="title"
        />
      </GWrapper>
      {data && (
        <SpecialRow>
          <SpecialLeft>
            <div className="left-row">
              {data[0] ?  data[0].pos  == 1 && (
                <div className="min-block item">
                  <div className="item-image">
                    <Image width={100} height="100%" layout="responsive" src={data[0].image} alt={data[0].title} />
                  </div>
                  <p className="offers-title">{data[0].title}</p>
                  <p className="offers-description">{data[0].anons}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/offers/${data[0].slug}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ): null }
              {data[1] ? data[1].pos == 2 && (
                <div className="max-block item">
                  <div className="item-image">
                    <Image width={100} height="100%" layout="responsive" src={data[1].image} alt={data[1].title} />
                  </div>
                  <p className="offers-title">{data[1].title}</p>
                  <p className="offers-description">{data[1].anons}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/offers/${data[1].slug}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ): null }
            </div>
            <div className="left-row">
              {data[2] ? data[2].pos   == 3 && (
                <div className="max-block item">
                  <div className="item-image">
                    <Image width={100} height="100%" layout="responsive" src={data[2].image} alt={data[2].title} />
                  </div>
                  <p className="offers-title">{data[2].title}</p>
                  <p className="offers-description">{data[2].anons}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/offers/${data[2].slug}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ) : null }
              {data[3] ? data[3].pos   == 4 && (
                <div className="min-block item">
                  <div className="item-image">
                    <Image width={100} height="100%" layout="responsive" src={data[3].image} alt={data[3].title} />
                  </div>
                  <p className="offers-title">{data[3].title}</p>
                  <p className="offers-description">{data[3].anons}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/offers/${data[3].slug}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ): null }
            </div>
          </SpecialLeft>
          <SpecialRight className="item">
            {data[4] ?  data[4].pos  == 5 && (
              <>
                <div className="item-image">
                  <Image width={100} height="100%" layout="responsive" src={data[4].image} alt={data[4].title} />
                </div>
                <p className="offers-title">{data[3].title}</p>
                <p className="offers-description">{data[3].anons}</p>
                <HorizontalSliderButton className="item-button">
                  <NextLink href={`/offers/${data[4].slug}`} passHref>
                    <Link>
                      <span>Узнать подробнее</span>
                      <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                    </Link>
                  </NextLink>
                </HorizontalSliderButton>
              </>
            ): null }
          </SpecialRight>
        </SpecialRow>
      )}
    </Wrapper>
  );
};

export default SpecialOffers;
