import { InfoRow, Wrapper } from "./about-info.e";
import LeftPanel from "./left-panel/left-panel";
import RightPanel from "./right-panel/right-panel";

const AboutInfo = ({ dataLeft, dataRight }) => {
  return (
    <Wrapper>
      <InfoRow>
        <LeftPanel dataLeft={dataLeft} />
        <RightPanel dataRight={dataRight} />
      </InfoRow>
    </Wrapper>
  );
};

export default AboutInfo;
