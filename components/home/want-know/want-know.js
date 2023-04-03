import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";

import {
  KnowList,
  KnowListItem,
  KnowRow,
  Wrapper,
  VerticalSlider,
  WrapperMob,
} from "./want-know.e";
import {useTranslation} from 'next-i18next'
import { GWrapper } from "../../../styles/global-styles.e";
import slugify from "slugify";
import { SectionTitle, WantKnowM } from "../..";
import { api } from "../../../services/api";
import Image from "next/image";

SwiperCore.use([
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
]);

const WantKnow  = () => {
  const swiperRef = useRef(null);
  const buttonRef = useRef(null);
  let [activIdx, setActiveIdx] = useState(0);
  const router = useRouter()
  const toSlide = (num) => {
    setActiveIdx(num);
    swiperRef.current?.swiper.slideTo(num + 3);
  };
  const { t } = useTranslation()
  const [wantKnows, setWantKnows] = useState()
  useEffect(() => {
  api.get("want-to-know" , { headers: {'x-lang': router.locale}}).then(async (response) => {
    await setWantKnows(response.data.data);
  });
}, []);


  return (
    <>
      <Wrapper>
        <VerticalSlider>
          <Swiper
            ref={swiperRef}
            tag="section"
            direction={"vertical"}
            loop={true}
            slidesPerView={3}
            className="mySwiper"
            navigation={false}
            speed={1200}
            centeredSlides={true}
            loopedSlides={3}
            watchSlidesProgress={true}
            allowTouchMove={false}
            breakpoints={{
              1400: {
                spaceBetween: 40,
              },
              1024: {
                spaceBetween: 20,
              },
              400: {
                spaceBetween: 10,
              },
            }}
          >
            {wantKnows?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Image width={100} height="100%" layout="responsive" key={idx} src={item.image} alt={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </VerticalSlider>
        <GWrapper>
          <SectionTitle title={t("common:want_to_know")} color="white" classN="title" />
          <KnowRow>
            <KnowList>
              {wantKnows?.map((item, idx) => (
                <KnowListItem
                  key={idx}
                  onMouseMove={() => {
                    toSlide(idx );
                  }} className={activIdx == idx  ? "list-active" : ""} >
                  <NextLink href={`/want/${item.slug}`} passHref>
                    <a>
                    <Link>
                      <span className="box"></span>
                      {item.title}
                    </Link>
                    </a>  
                  </NextLink>
                </KnowListItem>
              ))}
            </KnowList>
          </KnowRow>
        </GWrapper>
      </Wrapper>
      <WrapperMob>
        <WantKnowM data={wantKnows}/>
      </WrapperMob>
    </>
  );
};

export default WantKnow;
 