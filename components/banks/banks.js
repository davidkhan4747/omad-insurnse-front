import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "../about/mission/Mission.e";
import parse from "html-react-parser";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import { AboutNav, InviteCooperationForm, PartnersComp } from "../common";
import { useTranslation } from "react-i18next";
const main_image = "/slider1.jpg";
const BanksComp = ({ data }) => {
  const { t } = useTranslation();


  return (
    <>
      <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{data.parent.title}</PageHeading>
            <PageText>{parse(data.parent.info)}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          <div>
          
                <MissionContentAbItem>
                  <MissionContentTitle>{data.title} </MissionContentTitle>
                  {parse(data.text)}
                </MissionContentAbItem>
      
          </div>
          {/* <PartnersComp data={data?.call_center} /> */}
        </MissionContent>
        <InviteCooperationForm />
      </MissionBody>
    </>
  );
};

export default BanksComp;
