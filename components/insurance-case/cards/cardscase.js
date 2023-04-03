import { Wrapper } from "./cards.e";
import Card from "./card/card";
import { CardsRow } from "../../about/cards/cards.e";

const CardsCaseInsurance= ({ id, data }) => {


  return (
    <Wrapper>
        <CardsRow>
          {data?.map((item, idx) => (
            <Card id={id} key={idx} item={item} />
          ))}
        </CardsRow>
    </Wrapper>
    
  );
};

export default CardsCaseInsurance;
