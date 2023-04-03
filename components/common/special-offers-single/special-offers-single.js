import parse from "html-react-parser";
import { PageTitle, PageDes, CardBlock, HighBlock, Kopite, SpecBlock, CenterTitle, Uslovs, CardTitle } from "./special-offers-single.e";

import Link from "next/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import { MissionNav ,MissionNavItem} from "../../want-to-know-sinle/want-to-know-sinle.e";
const SpecialOffersSingle = ({
  data
}) => {

  return (
    <>
      <ContainerHero imgUrl={data?.image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{data?.title} </PageHeading>

          </HeroBgItem>
        </GWrapper>
      </ContainerHero>


      <SpecBlock>
        <HighBlock>
            <Kopite>
                <PageTitle>{data?.title}</PageTitle>
                <PageDes>{parse(data?.full_text)}</PageDes>
           
            </Kopite>

      
        </HighBlock>
        <MissionNav>
            {data.links?.map((item , idx)=>(
                <Link href={`/offers/${item.slug}`}  key={idx} passHref>
                  <MissionNavItem> {item.title}</MissionNavItem>
                </Link>
            ))}
          </MissionNav>
      </SpecBlock>
      
    </>
  );
};

export default SpecialOffersSingle;
