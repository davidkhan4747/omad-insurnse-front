import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { GWrapper } from "../../../styles/global-styles.e";
import { Wrapper, SliderImg, SliderDescriptionBtn, HeroTitle } from "./news.e";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Controller,
  Autoplay,
} from "swiper";
import { SectionTitle } from "..";
import { api } from "../../../services/api";
import ArrowIconNews from "../../svg/ArrowIconNews";
import Image from "next/image";

SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);
const News = () => {
  const { t } = useTranslation();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [news, setNews] = useState();
  const router = useRouter()
  useEffect(() => {
    api.get("news/index" ,{ headers: {'x-lang': router.locale}} ).then((res) => {
      setNews(res.data.data);
    });
  }, []);
  
  const [lineProgress, setLineProgress] = useState(false);
  return (
    <Wrapper>
      <GWrapper className="container">
        <SectionTitle title={t("common:news_title")} color="white" classN="title" />
      </GWrapper>
      <Swiper
        direction={"vertical"}
        pagination={false}
        speed={3200}
        loop={true}
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        allowTouchMove={false}
        className="news-image" >
        {news?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SliderImg data-swiper-parallax="20%" data-swiper-parallax-opacity="0" >
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
            speed={1200}
            loop={true}
            modules={[Controller]}
            autoplay={{
              delay: 2500,
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
            {news?.map((item, idx) => (
              
              <SwiperSlide key={idx}>
                  <div className="news-date">
                      <div className="month">
                        <span>{item.created_at.day}</span>{item.created_at.month}
                      </div>
                    <div className="year">{item.created_at.year}</div>
                  </div>

                <div className="slider-description-item">
                  <h4 className="slider-description__title">
                    <Link href={`/news/${item.slug}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <p className="slider-description__content">{item.anons}</p>
                </div>
              </SwiperSlide>
            ))}

            <div className={ lineProgress ? "slider-description__line active" : "slider-description__line" }>
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

export default News;