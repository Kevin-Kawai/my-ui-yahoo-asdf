import * as React from "react";
import { SVGProps } from "react";
const SvgIconMessage = (props: SVGProps<SVGSVGElement>) => (
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
        d="M19.9999015,7.15413715 C20.0000195,7.16126566 20.0000314,7.16839199 19.9999376,7.17551369 L19.9999376,15.8333333 C19.9999376,17.0266501 19.0197887,18 17.8181364,18 L6.1818636,18 C4.98021134,18 4.00006244,17.0266501 4.00006244,15.8333333 L4.00006244,7.17551369 C3.9999686,7.16839199 3.99998047,7.16126566 4.00009848,7.15413715 C4.00693048,5.96654414 4.98441975,5 6.1818636,5 L17.8181364,5 C19.0155803,5 19.9930695,5.96654414 19.9999015,7.15413715 Z M18.4678932,6.84451844 C18.3476177,6.60833344 18.1002878,6.44444444 17.8181364,6.44444444 L6.1818636,6.44444444 C5.89971218,6.44444444 5.65238231,6.60833344 5.53210676,6.84451844 L12,11.3406376 L18.4678932,6.84451844 Z M18.5454035,8.55380679 L12.4170603,12.8138897 C12.1666476,12.9879627 11.8333524,12.9879627 11.5829397,12.8138897 L5.45459655,8.55380679 L5.45459655,15.8333333 C5.45459655,16.2289055 5.78352834,16.5555556 6.1818636,16.5555556 L17.8181364,16.5555556 C18.2164717,16.5555556 18.5454035,16.2289055 18.5454035,15.8333333 L18.5454035,8.55380679 Z"
        id="boron-ui__icon-message__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-message__icon-/-icon-message"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-message__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-message__path-1" />
      </mask>
      <use
        id="boron-ui__icon-message__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-message__path-1"
      />
    </g>
  </svg>
);
export default SvgIconMessage;
