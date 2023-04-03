import parse from "html-react-parser";
import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "../mission/Mission.e";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import { AboutNav } from "../../common";
import { RequisitesTable, RequisitesTableText } from "./requisites.e";
const main_image = "/slider1.jpg";
const Requisites = ({
  title,
  description,
  data,
  sidebars,
}) => {
  // console.log("inner ->>>>", data[0]);

  return (
    <>
      <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{title}</PageHeading>
            <PageText>{description}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          <div>
            {data.length > 0 &&
              data.map((item, idx) => (
                <RequisitesTable key={idx}>
                  <MissionContentAbout>{item.title}</MissionContentAbout>
                  <RequisitesTableText>
                    {parse(item.description)}
                  </RequisitesTableText>
                </RequisitesTable>
              ))}
          </div>
          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default Requisites;
