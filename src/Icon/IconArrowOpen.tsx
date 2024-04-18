import * as React from "react";
import { SVGProps } from "react";
const SvgIconArrowOpen = (props: SVGProps<SVGSVGElement>) => (
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
        d="M17.0125631,11 L13.2562816,6.70710678 C12.9145728,6.31658249 12.9145728,5.68341751 13.2562816,5.29289322 C13.5979903,4.90236893 14.1520097,4.90236893 14.4937184,5.29289322 L19.7437184,11.2928932 C20.0854272,11.6834175 20.0854272,12.3165825 19.7437184,12.7071068 L14.4937184,18.7071068 C14.1520097,19.0976311 13.5979903,19.0976311 13.2562816,18.7071068 C12.9145728,18.3165825 12.9145728,17.6834175 13.2562816,17.2928932 L17.0125631,13 L4.88888889,13 C4.39796911,13 4,12.5522847 4,12 C4,11.4477153 4.39796911,11 4.88888889,11 L17.0125631,11 Z"
        id="boron-ui__icon-arrow-open__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-arrow-open__icon-/-icon-arrow-open"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-arrow-open__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-arrow-open__path-1" />
      </mask>
      <use
        id="boron-ui__icon-arrow-open__arrow_open"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-arrow-open__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArrowOpen;
