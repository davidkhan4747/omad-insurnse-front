import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import {
  CardDesc,
  CardTag,
  CardTags,
  SliderImg,
  SliderLink,
  SliderTitle,
  Wrapper,
  WrapperTag,
} from "./card.e";
import slugify from "slugify";
import Slider1 from "../../../../assets/images/multi-slider/slider-1.jpg";
import { useRouter } from "next/router";

const Card = ({ id, item }) => {
  const router = useRouter();
  const {query} = router;
  return (
    <>
      {id == "shop" && (
        <Wrapper>
          <Link href={`/insurance/${item.slug}`} passHref>
            <a>
              <div>
                <SliderTitle>{item.main_title}</SliderTitle>
                <p>{parse(item.main_description)}</p>
              </div>
              <div>
                <SliderImg>
                  <Image width={100} height="100%" layout="responsive" src={item.main_image} />
                  <SliderLink>Купить онлайн</SliderLink>
                </SliderImg>
              </div>
            </a>
          </Link>
        </Wrapper>
      )}

      {id == "case" && (
        <WrapperTag>
          <SliderTitle>{item.title}</SliderTitle>
          <CardDesc>{parse(item.description )}</CardDesc>
          <CardTags>
            {item.subCategory?.map((tag, tagId) => (
              <CardTag key={tagId}>
                <Link href={`/catalog/cases/${tag.slug}`} passHref>
                  <a>{tag.title}</a>
                </Link>
              </CardTag>
            ))}
          </CardTags>

          <SliderImg>
            <Image width={100} height="100%" layout="responsive" src={Slider1} alt="slider-image" />
          </SliderImg>
        </WrapperTag>
      )}
    </>
  );
};

export default Card;
