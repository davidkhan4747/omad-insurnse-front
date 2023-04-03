
import NextLink from "next/link";
import { Link } from "@mui/material";
import { Wrapper } from "./main-btn.e";

const MainBtn = ({ onClass, text, url }) => {
  const ArrowIconLeft = (props) => (
    <svg
      width="57"
      height="16"
      viewBox="0 0 57 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`btn ${props.class}`}
    >
      <path
        d="M56 9L57 9L57 7L56 7L56 9ZM0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6568L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928928C7.68054 0.538404 7.04738 0.538404 6.65685 0.928928L0.292893 7.29289ZM56 7L1 7L1 9L56 9L56 7Z"
        fill={props.fill}
      />
    </svg>
  );
  const ArrowIconRight = (props) => (
    <svg
      width="47"
      height="16"
      viewBox="0 0 47 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`btn ${props.class}`}
    >
      <path
        d="M1 7L8.74228e-08 7L-8.74228e-08 9L1 9L1 7ZM46.7071 8.70711C47.0976 8.31659 47.0976 7.68342 46.7071 7.2929L40.3431 0.928936C39.9526 0.538411 39.3195 0.538411 38.9289 0.928936C38.5384 1.31946 38.5384 1.95262 38.9289 2.34315L44.5858 8L38.9289 13.6569C38.5384 14.0474 38.5384 14.6805 38.9289 15.0711C39.3195 15.4616 39.9526 15.4616 40.3431 15.0711L46.7071 8.70711ZM1 9L46 9L46 7L1 7L1 9Z"
        fill={props.fill}
      />
    </svg>
  );

  return url !== null ? (
    <Wrapper className={onClass}>
      <NextLink href={url} passHref>
        <Link>
          <span>{text}</span>
          <ArrowIconRight fill="#F0803D" class="arrow-right" />
        </Link>
      </NextLink>
    </Wrapper>
  ) : (
    <Wrapper className={onClass}>
      <button>
        <span>{text}</span>
        <ArrowIconRight fill="#F0803D" class="arrow-right" />
      </button>
    </Wrapper>
  );
};

export default MainBtn;
