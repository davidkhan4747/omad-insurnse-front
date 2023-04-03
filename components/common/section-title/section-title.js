import { Title } from "./section-title.e";

const SectionTitle = ({ color, classN, title }) => {
  return (
    <Title color={color} className={classN}>
      {title} 
    </Title>
  );
};

export default SectionTitle;
