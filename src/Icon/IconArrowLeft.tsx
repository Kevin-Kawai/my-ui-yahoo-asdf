import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      <polygon
        id="boron-ui__icon-arrow-left__path-1"
        points="15 8.16666667 13.8648649 7 9 12 13.8648649 17 15 15.8333333 11.2702703 12"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-left__icon-/-icon-arrow-left"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-left__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-left__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-left__left"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-arrow-left__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowLeft;
