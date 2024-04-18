import * as React from "react";
import { SVGProps } from "react";
const SvgIconCloseX = (props: SVGProps<SVGSVGElement>) => (
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
        id="boron-ui__icon-close-x__path-1"
        points="17 8.00671141 12.9866221 12 17 15.9932886 15.9966555 17 11.9832776 13.0067114 8.00334448 17 7 15.9932886 10.9799331 12 7 8.00671141 8.00334448 7 11.9832776 10.9932886 15.9966555 7"
      />
    </defs>
    <g
      id="boron-ui__icon-close-x__icon-/-icon-close-x"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-close-x__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-close-x__path-1" />
      </mask>
      <use
        id="boron-ui__icon-close-x__Mask"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-close-x__path-1"
      />
    </g>
  </svg>
);
export default SvgIconCloseX;
