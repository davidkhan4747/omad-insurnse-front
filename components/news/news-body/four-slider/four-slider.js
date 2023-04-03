import {  useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Wrapper } from "./four-slider.e";
import slugify from "slugify"
import Link from "next/link";
import ArrowIconRigthLeft from "../../../svg/ArrowIconRigthLeft";
// install Swiper modules
SwiperCore.use([Navigation]);

const FourSlider  = ({news}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Wrapper>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="marazSwiper" >
        <div className="slider-buttons">
          <div ref={navigationPrevRef} className="nav nav-left">
            <ArrowIconRigthLeft fill="#F0803D" class="svg arrow-left" />
          </div>

          <div ref={navigationNextRef} className="nav nav-right">
            <ArrowIconRigthLeft fill="#F0803D" class="svg arrow-right" />
          </div>
        </div>
        {news?.map((items, idx) => (
          <SwiperSlide key={idx}>
            <div className="slider-row">
              {/* @ts-ignore */}
              {items?.map((item, index) => (
                <div className="slider-item" key={index}>
                  <div className="slider-img">
                    <div className="image">
                      <Image src={item.image} width={500} height={0} alt={item.title} />
                    </div>
                  </div>
                  <div className="slider-content">
                    <h6 className="slider-content__name">
                   
                      <Link href={`/news/${slugify(item.slug)}`}>
                        <a>{item.title}</a>
                      </Link>
                   
                    </h6>
                    <p className="slider-content__text">{item.anons}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default FourSlider;
