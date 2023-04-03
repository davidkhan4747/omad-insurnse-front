
import { ContainerHero, HeroBgItem, PageHeading } from "./hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";

const HeroBg = ({ data }) => {
  const { name, bg_image} = data;

  return (
    <ContainerHero imgUrl={bg_image}>
      <GWrapper>
        <HeroBgItem>
          <PageHeading>{name }</PageHeading>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
  );
};

export default HeroBg;
