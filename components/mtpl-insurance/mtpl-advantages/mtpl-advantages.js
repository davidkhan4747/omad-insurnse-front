import parse from "html-react-parser";
import {
  MtplAdventagesHeading,
  MtplAdventagesBlock,
  MtplAdventagesCard,
  MtplAdventagesCardHeading,
  MtplAdventagesCardText,
  MtplAdventagesInsurance,
  MtplAdventagesInsuranceHeading,
  MtplAdventagesInsuranceText,
  MtplAdventagesNubmer,
  NumText,
  NumberB,
  ImgBlock,
  MtplAdventagesInsuranceTwo,
  CardImage,
  Arrow1,
  ERBg,
  AS,
} from "./mtpl-advantages.e";
import Image from "next/image";
import { Casco, Health, Property } from "../..";
import { useRouter } from "next/router";
const MtplAdventages  = ({
  data
}) => {
  const router = useRouter();
  const yur = true;
  const fiz = false;
  return (
    <ERBg>
      {data?.advantage !== "" && (
        <ERBg>
          <MtplAdventagesHeading>{data.advantage}</MtplAdventagesHeading>
          <MtplAdventagesBlock>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(data.advantage_title_1)}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(data.advantage_text_2)}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(data.advantage_title_2)}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(data.advantage_text_2)}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(data.advantage_title_3)}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(data.advantage_text_3)}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {parse(data.advantage_title_4)}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(data.advantage_text_4)}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
          </MtplAdventagesBlock>
        </ERBg>
      )}
      {data.card_image_title !== "" && (
        <ERBg>
          <MtplAdventagesHeading>{data.card_image_title}</MtplAdventagesHeading>
          <MtplAdventagesInsurance>
            <div>
              <MtplAdventagesInsuranceText>
                {parse(data.card_image_1_text_1)}
              </MtplAdventagesInsuranceText>
      
              <MtplAdventagesInsuranceText>
                {parse(data.card_image_1_text_2)}
              </MtplAdventagesInsuranceText>
            </div>
            <CardImage>
              <img src={data.card_image_1_image} />
            </CardImage>
          </MtplAdventagesInsurance>
          <MtplAdventagesInsuranceTwo>
    
            <CardImage>
              <img src={data.card_image_2_image} />
            </CardImage>
            <div>
    
              <MtplAdventagesInsuranceText>
                {parse(data.card_image_2_text_1)}
              </MtplAdventagesInsuranceText>
         
              <MtplAdventagesInsuranceText>
                {parse(data.card_image_2_text_2)}
              </MtplAdventagesInsuranceText>
            </div>
          </MtplAdventagesInsuranceTwo>
        </ERBg>
      )}
      {data.card_title !== "" && (
        <>
          <MtplAdventagesHeading>{data.card_title}</MtplAdventagesHeading>
          <MtplAdventagesBlock>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {data.card_1_title}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(data.card_1_text_1)}
              </MtplAdventagesCardText>
              <MtplAdventagesCardText>
                {parse(data.card_1_text_2)}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
            <MtplAdventagesCard>
              <MtplAdventagesCardHeading>
                {data.card_2_title}
              </MtplAdventagesCardHeading>
              <MtplAdventagesCardText>
                {parse(data.card_2_text_1)}
              </MtplAdventagesCardText>
              <MtplAdventagesCardText>
                {parse(data.card_2_text_2)}
              </MtplAdventagesCardText>
            </MtplAdventagesCard>
          </MtplAdventagesBlock>
        </>
      )}
      {data.step_title !== "" && (
        <ERBg>
          <MtplAdventagesHeading>{data.step_title}</MtplAdventagesHeading>
          <MtplAdventagesBlock>
            <NumberB>
              <MtplAdventagesNubmer>
                <NumText>1</NumText>
              </MtplAdventagesNubmer>
              <MtplAdventagesInsuranceText>
                {parse(data.step_1)}
              </MtplAdventagesInsuranceText>
            </NumberB>
            <ImgBlock>
              <Arrow1>
                <div></div>
              </Arrow1>
            </ImgBlock>
            <NumberB>
              <MtplAdventagesNubmer>
                <NumText>2</NumText>
              </MtplAdventagesNubmer>
              <MtplAdventagesInsuranceText>
                {parse(data.step_2)}
              </MtplAdventagesInsuranceText>
            </NumberB>
            <ImgBlock>
              <Arrow1>
                <div></div>
              </Arrow1>

            </ImgBlock>
            <NumberB>
              <MtplAdventagesNubmer>
                <NumText>3</NumText>
              </MtplAdventagesNubmer>
              <MtplAdventagesInsuranceText>
                {parse(data.step_3)}
              </MtplAdventagesInsuranceText>
            </NumberB>
          </MtplAdventagesBlock>
          <AS>
            {data.category.slug.indexOf("zdorov") ? (
              <Health yurFace={data.category.parent.slug.indexOf("yurid") ? yur : fiz} title={data.category.title} />
            ) : (
              data.category.slug.indexOf("avto") ? (
                <Casco yurFace={data.category.parent.slug.indexOf("yurid") ? yur : fiz} title={data.category.title} />
              ) : (
                ""
              )
            )}
           

            {/* {forms.type == "estates" ? (
              <Property
                yurFace={forms.cat == "yur" ? yur : fiz}
                title={forms.title}
              />
            ) : (
              ""
            )} */}
          </AS>
        </ERBg>
      )}
    </ERBg>

  );
};
export default MtplAdventages;
