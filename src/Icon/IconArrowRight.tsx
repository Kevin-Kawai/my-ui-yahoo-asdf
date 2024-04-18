import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
        id="boron-ui__icon-arrow-right__path-1"
        points="9 15.825 12.708502 12 9 8.175 10.1417004 7 15 12 10.1417004 17"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-right__icon-/-icon-arrow-right"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-right__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-right__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-right__Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-arrow-right__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowRight;
