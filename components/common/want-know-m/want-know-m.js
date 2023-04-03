import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";
import slugify from "slugify";
import SectionTitle from "../section-title/section-title";
import {
  InnerWrapper,
  SliderButton,
  SliderDescription,
  SliderImage,
  SliderLeft,
  SliderRight,
  SliderRow,
  SliderTitle,
  Wrapper,
  WANTbg
} from "./want-know-m.e";
import ArrowIconRigthLeft from "../../svg/ArrowIconRigthLeft"

import SwiperCore, { EffectCreative, Controller, Navigation } from "swiper";

SwiperCore.use([EffectCreative, Navigation]);

const WantKnowM = ({ data }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Wrapper>
      <InnerWrapper>
        <SectionTitle
          title="Хочу узнать"
          color="white"
          classN="section-title"
        />
        {data && (
          <SliderRow>
            <SliderLeft>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                speed= {800}
          
                creativeEffect={{
                  prev: {
                    shadow: true,
                    origin: "left center",
                    translate: ["-5%", 0, -200],
                    rotate: [0, 106, 0],
                  },
                  next: {
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -106, 0],
                  },
                }}
                className="mySwiper3"
                modules={[Controller]}
                controller={{ control: controlledSwiper }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                <div className="slider-buttons">
                  <div ref={navigationPrevRef} className="nav nav-left">
                    <ArrowIconRigthLeft fill="#F0803D" class="svg arrow-left" />
                  </div>

                  <div ref={navigationNextRef} className="nav nav-right">
                    <ArrowIconRigthLeft fill="#F0803D" class="svg arrow-right" />
                  </div>
                </div>
                {data.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <WANTbg>
                      <SliderTitle>{item.title}</SliderTitle>
                      <SliderDescription>{item.text}</SliderDescription>
                      <SliderButton>
                        <NextLink href={`/want/${item.slug}`}passHref>
                          <Link>
                            <span>Узнать подробнее</span>
                            <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                          </Link>
                        </NextLink>
                      </SliderButton>
                    </WANTbg>
                    
                  </SwiperSlide>
                  
                ))}
              </Swiper>
            </SliderLeft>
            <SliderRight>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    origin: "left center",
                    translate: ["-5%", 0, -200],
                    rotate: [0, 105, 0],
                  },
                  next: {
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -105, 0],
                  },
                }}
                className="mySwiper6"
                modules={[Controller]}

                onSwiper={setControlledSwiper}
              >
                {data.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <SliderImage>
                      <Image width={100} height="100%" layout="responsive" src={item.image} alt={item.title} />
                    </SliderImage>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SliderRight>
          </SliderRow>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default WantKnowM;
