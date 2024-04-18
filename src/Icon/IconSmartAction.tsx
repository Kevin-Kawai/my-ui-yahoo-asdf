import * as React from "react";
import { SVGProps } from "react";
const SvgIconSmartAction = (props: SVGProps<SVGSVGElement>) => (
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
        d="M16.5,16.792608 L16.5,6.25 C16.5,5.83578644 16.1642136,5.5 15.75,5.5 L8.25,5.5 C7.83578644,5.5 7.5,5.83578644 7.5,6.25 L7.5,16.792608 L11.5640714,13.8896999 C11.8248445,13.7034334 12.1751555,13.7034334 12.4359286,13.8896999 L16.5,16.792608 Z M12,15.4216777 L7.18592865,18.8603001 C6.68952729,19.2148725 6,18.8600294 6,18.25 L6,6.25 C6,5.00735931 7.00735931,4 8.25,4 L15.75,4 C16.9926407,4 18,5.00735931 18,6.25 L18,18.25 C18,18.8600294 17.3104727,19.2148725 16.8140714,18.8603001 L12,15.4216777 Z"
        id="boron-ui__icon-smart-action__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-smart-action__icon-/-icon-smart-action"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-smart-action__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-smart-action__path-1" />
      </mask>
      <use
        id="boron-ui__icon-smart-action__Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-smart-action__path-1"
      />
    </g>
  </svg>
);
export default SvgIconSmartAction;
