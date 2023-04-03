import { Wrapper } from "./cards.e";
import Card from "./card/card";
import { CardsRow } from "../../about/cards/cards.e";

const CardsCase= ({ id, data }) => {


  return (
    <Wrapper>
        <CardsRow>
          {data?.map((item, idx) => (
            item?.map((sub,idw) => (
            <Card id={id} key={idx} item={sub} />
            ))
          ))}
        </CardsRow>
    </Wrapper>
    
  );
};

export default CardsCase;
