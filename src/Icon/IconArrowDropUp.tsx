import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowDropUp = (props: SVGProps<SVGSVGElement>) => (
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
        id="boron-ui__icon-arrow-drop-up__path-1"
        points="12 15 8 10 16 10"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-drop-up__icon-/-icon-arrow-drop-up"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-drop-up__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-drop-up__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-drop-up__down"
        fill="currentColor"
        fillRule="nonzero"
        transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000) "
        xlinkHref="#boron-ui__icon-arrow-drop-up__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowDropUp;
