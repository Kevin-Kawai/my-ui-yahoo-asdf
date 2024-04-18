import * as React from "react";
import { SVGProps } from "react";
const SvgIconSearch = (props: SVGProps<SVGSVGElement>) => (
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
        d="M15.4351058,14.0628931 L14.7124071,14.0628931 L14.4562607,13.8158948 C15.352773,12.7730132 15.89251,11.4190966 15.89251,9.946255 C15.89251,6.66209262 13.2304174,4 9.946255,4 C6.66209262,4 4,6.66209262 4,9.946255 C4,13.2304174 6.66209262,15.89251 9.946255,15.89251 C11.4190966,15.89251 12.7730132,15.352773 13.8158948,14.4562607 L14.0628931,14.7124071 L14.0628931,15.4351058 L18.6369354,20 L20,18.6369354 L15.4351058,14.0628931 Z M9.946255,14.0628931 C7.66838193,14.0628931 5.82961692,12.2241281 5.82961692,9.946255 C5.82961692,7.66838193 7.66838193,5.82961692 9.946255,5.82961692 C12.2241281,5.82961692 14.0628931,7.66838193 14.0628931,9.946255 C14.0628931,12.2241281 12.2241281,14.0628931 9.946255,14.0628931 Z"
        id="boron-ui__icon-search__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-search__icon-/-icon-search"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-search__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-search__path-1" />
      </mask>
      <use
        id="boron-ui__icon-search__Mask"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-search__path-1"
      />
    </g>
  </svg>
);
export default SvgIconSearch;
