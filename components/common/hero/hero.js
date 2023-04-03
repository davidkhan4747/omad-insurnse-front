import {  useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import NextLink from 'next/link'
import { GWrapper } from "../../../styles/global-styles.e";
import { Wrapper, SliderImg, SliderDescriptionBtn, HeroTitle } from "./hero.e";

import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Controller,
  Autoplay,
} from "swiper";
import { api } from "../../../services/api";
import ArrowIconNews from "../../svg/ArrowIconNews";
import Image from "next/image";
import {useRouter} from "next/router"
import parse from "html-react-parser"
SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);

const Hero= () => {
  const router = useRouter();
  const {id = 0} = router.query;
  const [sliders, setSliders] = useState([]);
  const categories = ['1', '2', '3'];
  var params = {};
  
  if(router.asPath.indexOf('chastnym-licam') > 0){
    params = { id:1 } 
  }
  if(router.asPath.indexOf('yuridicheskim-licam') > 0){
    params = { id:2 } 
  }
  
  
  if(router.asPath.indexOf('partners') > 0){
    
    params = { id:3 } 
  }
  if(router.asPath.indexOf('about') >0){
    params = { id:4 } 
  }
  
  useEffect(() => {
      api.get("slider-categories", {params, headers: {'x-lang': router.locale}}).then(async (response) => {
        await setSliders(response.data.data);
      });  
    }, []);


  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [lineProgress, setLineProgress] = useState(false);
  const [mobileImg ,setMobileImg] = useState()
  return (
    <Wrapper>
      <GWrapper className="container"></GWrapper>
      <Swiper
        direction={"vertical"}
        pagination={false}
        speed={3200}
        loop={true}
        parallax={true}
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        allowTouchMove={false}
      >
        {sliders?.map((item, idx) => (
          <SwiperSlide  key={idx}>
            <HeroTitle>{item.title}</HeroTitle>
            <SliderImg
            
              data-swiper-parallax="20%"
              data-swiper-parallax-opacity="0" >
        
              <img  layout="responsive" src={item.image} alt={item.title} />
            </SliderImg>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-description">
        <div className="slider-description__row">
          <Swiper
            fadeEffect={{ crossFade: true }}
            effect="fade"
            className="SWPdd"
            speed={2000}
            loop={true}
            modules={[Controller]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              type: "fraction",
            }}

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
            onSlideChange={(swiper) => {
 
              setLineProgress(!lineProgress);
            }}
          >
            {sliders?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="slider-description-item">
                  <NextLink href={item?.url ? item?.url :  '#' }>
                    <a>
                      <h4 className="slider-description__title">{item.anons }</h4> 
                      <p className="slider-description__content">{parse(item.text)}</p>
                    </a>
                  </NextLink>
                  
                </div>
              </SwiperSlide>
            ))}
            <div
              className={
                lineProgress
                  ? "slider-description__line active"
                  : "slider-description__line"
              }
            >
              <span className="line"></span>
            </div>
            <div className="slider-description__buttons">
              <SliderDescriptionBtn ref={navigationPrevRef}>
                <ArrowIconNews fill="#F0803D" class="arrow-top" />
              </SliderDescriptionBtn>

              <SliderDescriptionBtn ref={navigationNextRef}>
                <ArrowIconNews fill="#F0803D" class="arrow-bottom" />
              </SliderDescriptionBtn>
            </div>
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
