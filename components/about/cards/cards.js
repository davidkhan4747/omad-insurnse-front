import Card from "./card/card";
import { CardsRow, Wrapper } from "./cards.e";
import { useTranslation } from "react-i18next";

const Cards = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CardsRow>
       
          <Card item={data[1]} title="Миссия и ценности" />
          <Card item={data[2]} title="Финансы" />
          <Card item={data[3]} title="Страхование" />
          <Card item={data[4]} title="Участники" />
      </CardsRow>
    </Wrapper>  
  );
};

export default Cards;
