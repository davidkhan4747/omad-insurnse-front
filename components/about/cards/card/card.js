import Image from "next/image";
import {
  CardIcon,
  CardTag,
  CardTags,
  CardTitle,
  CardTitleRow,
  Wrapper,
} from "./card.e";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import Icon1 from "../../../../assets/images/about/cards/icon-2.png";
const Card  = ({ item, title}) => {
  const { t } = useTranslation();

  console.log(item)
  return (
    <Wrapper>
      <CardTitleRow>
        <CardTitle>{title}</CardTitle>
        {/* <CardIcon>
          <img src={Icon1} />
        </CardIcon> */}
      </CardTitleRow>
      <CardTags>
        {item?.map((itemD, idx) => (
          <CardTag key={idx}>
            <NextLink href={`/abouts/${itemD.slug}`} passHref>
              <a>{itemD.title}</a>
            </NextLink>
          </CardTag>
        ))}
      </CardTags>
    </Wrapper>
  );
};

export default Card;
