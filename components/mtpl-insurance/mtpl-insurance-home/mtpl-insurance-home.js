import {
  HomeBg,
  HomeBgItem,
  HomeHeading,
  HomeText,
  HomeBlock,
  CardServiceBlock,
  CardServiceHeading,
  CardServiceText,
  CardService,
  HomeImg,
} from "./mtpl-insurance-home.e";
import parse from "html-react-parser"
const MtplInsuranceHome  = ({ data }) => {
  return (
    <HomeBg>
      <HomeBlock>
        <HomeBgItem>
          <HomeHeading>
            {data.title}
          </HomeHeading>
          <HomeText>
            {parse(data.description)}
          </HomeText>
          <CardService>
            <CardServiceBlock>
              <CardServiceHeading>
                {data.privilege_title_1}
              </CardServiceHeading>
              <CardServiceText>
                {parse(data.privilege_description_1)}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>
                {data.privilege_title_2}
              </CardServiceHeading>
              <CardServiceText>
                {parse(data.privilege_description_2)}
              </CardServiceText>
            </CardServiceBlock>
            
            <CardServiceBlock>
              <CardServiceHeading>
                {data.privilege_title_3}
              </CardServiceHeading>
              <CardServiceText>
                {parse(data.privilege_description_3)}
              </CardServiceText>
            </CardServiceBlock>
          </CardService>
        </HomeBgItem>
        <HomeImg>
          <img src={data.image} />
        </HomeImg>
      </HomeBlock>
    </HomeBg>
  );
};
export default MtplInsuranceHome;
