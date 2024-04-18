import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
        id="boron-ui__icon-arrow-down__path-1"
        points="15 8.16666667 13.8648649 7 9 12 13.8648649 17 15 15.8333333 11.2702703 12"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-down__icon-/-icon-arrow-down"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-down__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-down__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-down__down"
        fill="currentColor"
        fillRule="nonzero"
        transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) "
        xlinkHref="#boron-ui__icon-arrow-down__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowDown;
