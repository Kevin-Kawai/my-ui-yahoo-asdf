import * as React from "react";
import { SVGProps } from "react";
const SvgIconActionTemplate = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12.7,11.3 L14.8,11.3 C15.1865993,11.3 15.5,11.6134007 15.5,12 C15.5,12.3865993 15.1865993,12.7 14.8,12.7 L12.7,12.7 L12.7,14.8 C12.7,15.1865993 12.3865993,15.5 12,15.5 C11.6134007,15.5 11.3,15.1865993 11.3,14.8 L11.3,12.7 L9.2,12.7 C8.81340068,12.7 8.5,12.3865993 8.5,12 C8.5,11.6134007 8.81340068,11.3 9.2,11.3 L11.3,11.3 L11.3,9.2 C11.3,8.81340068 11.6134007,8.5 12,8.5 C12.3865993,8.5 12.7,8.81340068 12.7,9.2 L12.7,11.3 Z M7.1,5 L16.9,5 C18.059798,5 19,5.94020203 19,7.1 L19,16.9 C19,18.059798 18.059798,19 16.9,19 L7.1,19 C5.94020203,19 5,18.059798 5,16.9 L5,7.1 C5,5.94020203 5.94020203,5 7.1,5 Z M7.1,6.4 C6.71340068,6.4 6.4,6.71340068 6.4,7.1 L6.4,16.9 C6.4,17.2865993 6.71340068,17.6 7.1,17.6 L16.9,17.6 C17.2865993,17.6 17.6,17.2865993 17.6,16.9 L17.6,7.1 C17.6,6.71340068 17.2865993,6.4 16.9,6.4 L7.1,6.4 Z"
        id="boron-ui__icon-action-template__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-action-template__icon-/-icon-action-template"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-action-template__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-action-template__path-1" />
      </mask>
      <use
        id="boron-ui__icon-action-template__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-action-template__path-1"
      />
    </g>
  </svg>
);
export default SvgIconActionTemplate;
