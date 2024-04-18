import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
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
        id="boron-ui__icon-arrow-drop-down__path-1"
        points="12 15 8 10 16 10"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-drop-down__icon-/-icon-arrow-drop-down"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-drop-down__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-drop-down__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-drop-down__down"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-arrow-drop-down__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowDropDown;
