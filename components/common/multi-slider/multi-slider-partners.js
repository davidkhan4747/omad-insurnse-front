import {  useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  SliderBtn,
  SliderBtnRow,
  SliderBtnWrapper,
  SliderText,
  Wrapper,
  BlovkButton,
} from "./multi-slider.e";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import SliderCardPartners from "./slider-card/slider-card-partners";
import ArrowIconLeft from "../../svg/ArrowIconLeft";
import ArrowIconRight from "../../svg/ArrowIconRight";


SwiperCore.use([Pagination, Navigation]);

const MultiSliderPartners= ({ data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [btnPrevHover, setBtnPrevHover] = useState(false);
  const [btnNextHover, setBtnNextHover] = useState(false);


  return (
    <Wrapper>
      <Swiper
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
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
        breakpoints={{
          200: {
            width: null,
            slidesPerView: 1,
          },

          480: {
            width: null,
            slidesPerView: 2,
          },
          768: {
            width: null,
            slidesPerView: 2,
          },
          1024: {
            width: null,
            slidesPerView: 3,
          },
          1200: {
            width: null,
            slidesPerView: 4,
          },
        }}
        className="mySwiper">
        {data?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SliderCardPartners item={item && item} />
          </SwiperSlide>
        ))}
          <SliderBtnRow>
            <BlovkButton>
              <SliderBtn
                ref={navigationPrevRef}
                active={btnPrevHover}
                onMouseMove={() => {
                  setBtnPrevHover(true);
                }}
                onMouseOut={() => {
                  setBtnPrevHover(false);
                }}
                className="left-btn" >
                <SliderBtnWrapper className="slider-wrapper">
                  <ArrowIconLeft fill="#F0803D" class="arrow-left" />
                  <SliderText active={btnPrevHover}><span className="preyti"> перейти</span></SliderText>
                </SliderBtnWrapper>
              </SliderBtn>

              <SliderBtn
                ref={navigationNextRef}
                active={btnNextHover}
                onMouseMove={() => {
                  setBtnNextHover(true);
                }}
                onMouseOut={() => {
                  setBtnNextHover(false);
                }}
              >
                <SliderBtnWrapper className="slider-wrapper">
                  <ArrowIconRight fill="#F0803D" class="arrow-right" />
                  <SliderText active={btnNextHover}><span className="preyti"> перейти</span></SliderText>
                </SliderBtnWrapper>
              </SliderBtn>
            </BlovkButton>
          </SliderBtnRow>

      </Swiper>
    </Wrapper>
  );
};

export default MultiSliderPartners;
