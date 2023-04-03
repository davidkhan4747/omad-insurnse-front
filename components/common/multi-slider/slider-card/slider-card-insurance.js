import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import parse from 'html-react-parser';
import {
  SliderImg,
  SliderLink,
  SliderList,
  SliderTitle,
  Wrapper,
  CardContent,
  
} from './slider-card.e';


const SliderCardInsurance = ({ item }) => {
  const { name, info, image, link, main_title,main_description,slug,main_image } = item;
  return (
    <Wrapper>
      <NextLink href={`/insurance/${link ?? slug ?? ''}`} passHref>
          <Link>
              <div>
                <SliderTitle>{name ?? main_title}</SliderTitle>
                <SliderList>
                  <CardContent>{parse(info ?? main_description ?? '')}</CardContent>
                </SliderList>
              </div>
              <div>
                <SliderImg>
                  <Image width={200} height="100%" layout="responsive" src={image ?? main_image} />
                  <SliderLink>Подробнее </SliderLink>
                </SliderImg>
              </div>
          </Link>
      </NextLink>
    </Wrapper>
  );
};

export default SliderCardInsurance;
