import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
} from "./want-to-know-sinle.e";
import Link from "next/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
} from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import { useTranslation } from "react-i18next";
import slugify from "slugify";
import parse from "html-react-parser"; 
const WnatKnowS = ({
data,
links
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ContainerHero imgUrl={data?.main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{data?.title} </PageHeading>

          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          <div>
          <MissionContentTitle>{data?.title}</MissionContentTitle>
                <MissionContentAbout>{parse(""+data?.full_text)}</MissionContentAbout>
          </div>
              
          <MissionNav>
            {links?.map((item , idx)=>(
                <Link href={`/want/${item.slug}`}  key={idx} passHref>
                  <MissionNavItem> {item.title}</MissionNavItem>
                </Link>
            ))}
          </MissionNav>
          
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default WnatKnowS;
