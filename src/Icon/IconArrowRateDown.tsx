import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowRateDown = (props: SVGProps<SVGSVGElement>) => (
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
        id="boron-ui__icon-arrow-rate-down__path-1"
        points="11.34375 6 12.65625 6 12.65625 15.4375 15.0625 13.0625 16 14 12 18 8 14 8.9375 13.0625 11.34375 15.4375"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-rate-down__icon-/-icon-arrow-rate-down"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-rate-down__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-rate-down__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-rate-down__Mask"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-arrow-rate-down__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowRateDown;
