
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "./hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
const HeroBgOf  = ({  }) => {
  // @ts-ignor'e
const Img = '/bg-avto-str.png'
  return (
    <ContainerHero imgUrl={Img}>
      <GWrapper>
        <HeroBgItem>
          {/* */}
          <PageHeading>Акции и спецпредложения</PageHeading>
          <PageText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. </PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
  );
};

export default HeroBgOf;
