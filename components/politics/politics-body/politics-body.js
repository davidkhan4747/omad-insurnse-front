import Image from "next/image";
import { Wrapper } from "./politics-body.e";
import { MWrapper } from "../../../styles/global-styles.e";
import { SectionTitle } from "../..";

import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
const PoliticsBody = () => {
  return (
    <Wrapper>
      <MWrapper>
        <SectionTitle
          title="Lorem non natoque nunc."
          color="black"
          classN="title"
        />
        <div className="body-top">
          <div className="body-top__item">
            <div className="body-top__number">
              <span>1</span>
            </div>
            <div className="body-top__text">
              <h6 className="section__name">
                Vitae blandit consectetur viverra.
              </h6>
              <p className="section__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                tortor quam ultricies ut leo integer tortor. Pellentesque at at
                penatibus ut proin viverra dignissim nunc.
              </p>
            </div>
          </div>

          <div className="body-top__item">
            <div className="body-top__number">
              <span>2</span>
            </div>
            <div className="body-top__text">
              <h6 className="section__name">
                Vitae blandit consectetur viverra.
              </h6>
              <p className="section__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                tortor quam ultricies ut leo integer tortor. Pellentesque at at
                penatibus ut proin viverra dignissim nunc.
              </p>
            </div>
          </div>

          <div className="body-top__item">
            <div className="body-top__number">
              <span>3</span>
            </div>
            <div className="body-top__text">
              <h6 className="section__name">
                Vitae blandit consectetur viverra.
              </h6>
              <p className="section__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                tortor quam ultricies ut leo integer tortor. Pellentesque at at
                penatibus ut proin viverra dignissim nunc.
              </p>
            </div>
          </div>

          <div className="body-top__item">
            <div className="body-top__number">
              <span>4</span>
            </div>
            <div className="body-top__text">
              <h6 className="section__name">
                Vitae blandit consectetur viverra.
              </h6>
              <p className="section__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                tortor quam ultricies ut leo integer tortor. Pellentesque at at
                penatibus ut proin viverra dignissim nunc.
              </p>
            </div>
          </div>
        </div>
        <SectionTitle
          title="Lorem non natoque nunc."
          color="black"
          classN="title"
        />
        <div className="body-center">
          <div className="body-center__left">
            <h6 className="section__name">Urna orci sit varius etiam.</h6>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing vulputate quis viverra odio. Ornare cras iaculis
              aliquet sed ac. Lectus nulla enim orci, vel egestas odio
              fermentum. Elementum velit ullamcorper nunc massa a dolor orci
              elementum sed. Enim elit rhoncus urna commodo morbi amet nec.
              Aliquet turpis id pellentesque urna semper egestas sagittis. Diam
              sit vitae fringilla eu cum etiam. Arcu sit tellus diam facilisi.
              Neque hendrerit nam egestas hac vestibulum non amet suspendisse.
              Tellus sed mus eu quis cursus eu egestas lobortis sollicitudin.
              Pretium semper est tincidunt pellentesque vulputate arcu molestie
              id vulputate. Massa lacinia aenean id enim. Facilisi vitae amet
              lectus tincidunt dolor pulvinar ipsum. Est molestie tristique nibh
              augue platea sagittis urna mattis massa. Enim adipiscing ridiculus
              quis ultricies habitant convallis sit. Risus lorem ut at.
            </p>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing vulputate quis viverra odio. Ornare cras iaculis
              aliquet sed ac. Lectus nulla enim orci, vel egestas odio
              fermentum. Elementum velit ullamcorper nunc massa a dolor orci
              elementum sed. Enim elit rhoncus urna commodo morbi amet nec.
              Aliquet turpis id pellentesque urna semper egestas sagittis. Diam
              sit vitae fringilla eu cum etiam. Arcu sit tellus diam facilisi.
              Neque hendrerit nam egestas hac vestibulum non amet suspendisse.
              Tellus sed mus eu quis cursus eu egestas lobortis sollicitudin.
              Pretium semper est tincidunt pellentesque vulputate arcu molestie
              id vulputate. Massa lacinia aenean id enim. Facilisi vitae amet
              lectus tincidunt dolor pulvinar ipsum. Est molestie tristique nibh
              augue platea sagittis urna mattis massa. Enim adipiscing ridiculus
              quis ultricies habitant convallis sit. Risus lorem ut at.
            </p>
          </div>
          <div className="body-center__right">
            <div className="section__image">
              <Image src={SliderImg1} alt="test1" />
            </div>
          </div>
        </div>
        <SectionTitle
          title="Lorem non natoque nunc."
          color="black"
          classN="title"
        />
        <div className="body-bottom">
          <div className="body-bottom__item">
            <h6 className="section__name">Proin ornare amet ac ante.</h6>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              blandit est malesuada sed arcu. Arcu ultrices pellentesque feugiat
              posuere.
            </p>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              blandit est malesuada sed arcu. Arcu ultrices pellentesque feugiat
              posuere.
            </p>
          </div>
          <div className="body-bottom__item">
            <h6 className="section__name">Proin ornare amet ac ante.</h6>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              blandit est malesuada sed arcu. Arcu ultrices pellentesque feugiat
              posuere.
            </p>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              blandit est malesuada sed arcu. Arcu ultrices pellentesque feugiat
              posuere.
            </p>
          </div>
          <div className="body-bottom__item">
            <h6 className="section__name">Proin ornare amet ac ante.</h6>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              blandit est malesuada sed arcu. Arcu ultrices pellentesque feugiat
              posuere.
            </p>
          </div>
          <div className="body-bottom__item">
            <h6 className="section__name">Proin ornare amet ac ante.</h6>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              blandit est malesuada sed arcu. Arcu ultrices pellentesque feugiat
              posuere.
            </p>
          </div>
        </div>
      </MWrapper>
    </Wrapper>
  );
};

export default PoliticsBody;
