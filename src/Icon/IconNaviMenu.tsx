import * as React from "react";
import { SVGProps } from "react";
const SvgIconNaviMenu = (props: SVGProps<SVGSVGElement>) => (
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
        d="M3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L3,13 Z M3,7 C2.44771525,7 2,6.55228475 2,6 C2,5.44771525 2.44771525,5 3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.55228475 21.5522847,7 21,7 L3,7 Z M3,19 C2.44771525,19 2,18.5522847 2,18 C2,17.4477153 2.44771525,17 3,17 L21,17 C21.5522847,17 22,17.4477153 22,18 C22,18.5522847 21.5522847,19 21,19 L3,19 Z"
        id="boron-ui__icon-navi-menu__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-navi-menu__icon-/-icon-navi-menu"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-navi-menu__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-navi-menu__path-1" />
      </mask>
      <use
        id="boron-ui__icon-navi-menu__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-navi-menu__path-1"
      />
    </g>
  </svg>
);
export default SvgIconNaviMenu;
