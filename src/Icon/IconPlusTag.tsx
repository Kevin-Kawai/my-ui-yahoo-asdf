import * as React from "react";
import { SVGProps } from "react";
const SvgIconPlusTag = (props: SVGProps<SVGSVGElement>) => (
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
        d="M11.1428571,11.1428571 L11.1428571,6.85714286 C11.1428571,6.38375593 11.5266131,6 12,6 C12.4733869,6 12.8571429,6.38375593 12.8571429,6.85714286 L12.8571429,11.1428571 L17.1428571,11.1428571 C17.6162441,11.1428571 18,11.5266131 18,12 C18,12.4733869 17.6162441,12.8571429 17.1428571,12.8571429 L12.8571429,12.8571429 L12.8571429,17.1428571 C12.8571429,17.6162441 12.4733869,18 12,18 C11.5266131,18 11.1428571,17.6162441 11.1428571,17.1428571 L11.1428571,12.8571429 L6.85714286,12.8571429 C6.38375593,12.8571429 6,12.4733869 6,12 C6,11.5266131 6.38375593,11.1428571 6.85714286,11.1428571 L11.1428571,11.1428571 Z"
        id="boron-ui__icon-plus-tag__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-plus-tag__icon-/-icon-plus-tag"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-plus-tag__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-plus-tag__path-1" />
      </mask>
      <use
        id="boron-ui__icon-plus-tag__Mask"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-plus-tag__path-1"
      />
    </g>
  </svg>
);
export default SvgIconPlusTag;
