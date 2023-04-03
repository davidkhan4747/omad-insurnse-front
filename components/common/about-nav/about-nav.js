import NextLink from "next/link";

import { MissionNav, MissionNavItem } from "../../about/mission/Mission.e";

const AboutNav  = ({ sidebars }) => {

  return (
    <>
      <MissionNav>
        {sidebars?.map((item, idx) => (
          <NextLink href={`${item.slug}`} passHref key={idx}>
            <a>
              <MissionNavItem>{item.title}</MissionNavItem>
            </a>
          </NextLink>
        ))}
      </MissionNav>
    </>
  );
};

export default AboutNav;
