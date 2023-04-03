import Card from "../CardBlock/CardBlock";
import { CardSection } from "./yur-face-card.e";

const YurFaceCard  = ({ data }) => {
  return (
    <CardSection>
       
      {data&&data.map((item, idx) => (  
        <Card key={idx} item={item} />
      ))}
    </CardSection>
  );
};

export default YurFaceCard;
