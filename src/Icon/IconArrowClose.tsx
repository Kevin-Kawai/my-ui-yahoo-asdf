import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowClose = (props: SVGProps<SVGSVGElement>) => (
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
        d="M7.12969577,13 L11.0648479,17.2928932 C11.4228285,17.6834175 11.4228285,18.3165825 11.0648479,18.7071068 C10.7068673,19.0976311 10.1264661,19.0976311 9.76848545,18.7071068 L4.26848545,12.7071068 C3.91050485,12.3165825 3.91050485,11.6834175 4.26848545,11.2928932 L9.76848545,5.29289322 C10.1264661,4.90236893 10.7068673,4.90236893 11.0648479,5.29289322 C11.4228285,5.68341751 11.4228285,6.31658249 11.0648479,6.70710678 L7.12969577,11 L19.5833333,11 C20.0895944,11 20.5,11.4477153 20.5,12 C20.5,12.5522847 20.0895944,13 19.5833333,13 L7.12969577,13 Z"
        id="boron-ui__icon-arrow-close__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-close__icon-/-icon-arrow-close"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-close__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-close__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-close__arrow_close"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-arrow-close__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowClose;
