import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import parse from 'html-react-parser';
import slugify from 'slugify';
import {
  SliderImg,
  SliderLink,
  SliderList,
  SliderTitle,
  Wrapper,
  CardContent,
  
} from './slider-card.e';


const SliderCardPartners = ({ item }) => {
  const { name, info, image, id, link } = item;
  return (
    <Wrapper>
      <NextLink href={`/partners/${link}`} passHref>
          <Link>
              <div>
                <SliderTitle>{name}</SliderTitle>
                <SliderList>
                  <CardContent>{parse(info)}</CardContent>
                </SliderList>
              </div>
              <div>
                <SliderImg>
                  <Image width={200} height="100%" layout="responsive" src={image} alt={name} />
                  <SliderLink>Подробнее </SliderLink>
                </SliderImg>
              </div>
          </Link>
      </NextLink>
    </Wrapper>
  );
};

export default SliderCardPartners;
