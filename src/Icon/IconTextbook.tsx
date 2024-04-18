import * as React from "react";
import { SVGProps } from "react";
const SvgIconTextbook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    {...props}
  >
    <defs>
      <path
        d="M17.4444444,14.5104167 L17.4444444,4.53472222 L7.72222222,4.53472222 C7.07789001,4.53472222 6.55555556,5.05006113 6.55555556,5.68576389 L6.55555556,14.7688758 C6.90915487,14.6031488 7.30471216,14.5104167 7.72222222,14.5104167 L17.4444444,14.5104167 Z M17.4444444,16.0451389 L7.72222222,16.0451389 C7.07789001,16.0451389 6.55555556,16.5604778 6.55555556,17.1961806 C6.55555556,17.8318833 7.07789001,18.3472222 7.72222222,18.3472222 L17.4444444,18.3472222 L17.4444444,16.0451389 Z M7.72222222,3 L18.2222222,3 C18.651777,3 19,3.34355927 19,3.76736111 L19,19.1145833 C19,19.5383852 18.651777,19.8819444 18.2222222,19.8819444 L7.72222222,19.8819444 C6.2187804,19.8819444 5,18.679487 5,17.1961806 L5,5.68576389 C5,4.20245745 6.2187804,3 7.72222222,3 Z"
        id="boron-ui__icon-textbook__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-textbook__icon-/-icon-textbook"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-textbook__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-textbook__path-1" />
      </mask>
      <use
        id="boron-ui__icon-textbook__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-textbook__path-1"
      />
    </g>
  </svg>
);
export default SvgIconTextbook;
