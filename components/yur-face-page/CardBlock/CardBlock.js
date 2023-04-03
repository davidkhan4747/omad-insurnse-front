import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser"
import { useTranslation } from "react-i18next";

import {
  CardBody,
  CradTitle,
  CardInfo,
  CardText,
  CardService,
  CardServiceHeading,
  CardServiceText,
  CardServiceBlock,
  CardBtns,
  HorizontalSliderButton,
  CardButton,
  CardBodyContent,
  CardImage,
} from "./CardBlock.e";
import ArrowIconRigthLeft from "../../svg/ArrowIconRigthLeft";

const Card = ({ item }) => {
  const { main_title, main_description, main_image, id , slug, privilege_title_1 ,privilege_title_2, privilege_title_3,privilege_description_1 , privilege_description_2,privilege_description_3} = item;
  const { t } = useTranslation();
  return (
    <CardBody>
      <CardBodyContent>
        <CardInfo>
          <CradTitle>{main_title}</CradTitle>
          <CardText>{parse(main_description)}</CardText>
          <CardService>
            <CardServiceBlock>
              <CardServiceHeading>
                {privilege_title_1}
              </CardServiceHeading>
              <CardServiceText>
                { parse(privilege_description_1)}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{privilege_title_2} </CardServiceHeading>
              <CardServiceText>
              {parse(privilege_description_2)}

              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{privilege_title_3}</CardServiceHeading>
              <CardServiceText>
                {parse(privilege_description_3)}
              </CardServiceText>
            </CardServiceBlock>
          </CardService>
          <CardBtns>
          <Link href={`/insurance/${slug}`} passHref>
            <CardButton>{t("common:Get_policy")}</CardButton>
          </Link>
            <HorizontalSliderButton>
              <Link href={`/insurance/${slug}`} passHref>
                <a>
                  <span>{t("common:Learn_more")}</span>
                  <ArrowIconRigthLeft fill="#F0803D" class="arrow-right" />
                </a>
              </Link>
            </HorizontalSliderButton>
          </CardBtns>
        </CardInfo>
        <CardImage>
          <Image width="100%" height="100%" layout="responsive" className="image" src={main_image} alt={main_title} />
        </CardImage>
      </CardBodyContent>
    </CardBody>
  );
};

export default Card;
