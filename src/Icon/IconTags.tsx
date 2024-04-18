import * as React from "react";
import { SVGProps } from "react";
const SvgIconTags = (props: SVGProps<SVGSVGElement>) => (
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
        d="M19.1621699,11.7228301 L12.9393398,5.5 L6.5,5.5 L6.5,11.9390839 L12.723125,18.154965 C12.8638012,18.2957978 13.0546931,18.37493 13.25375,18.37493 C13.4528069,18.37493 13.6436988,18.2957978 13.7846699,18.1546699 L19.1612477,12.7780921 C19.4513871,12.485514 19.4511705,12.0135601 19.1621699,11.7228301 Z M20.2244055,13.83625 L14.845625,19.215035 C14.4235964,19.6375334 13.8509208,19.87493 13.25375,19.87493 C12.6565792,19.87493 12.0839036,19.6375334 11.6624789,19.2156389 L5.21997887,12.7806389 C5.0791376,12.6399616 5,12.4490637 5,12.25 L5,4.75 C5,4.33578644 5.33578644,4 5.75,4 L13.25,4 C13.4489124,4 13.6396778,4.07901763 13.7803301,4.21966991 L20.2244055,10.66375 C21.0967836,11.5413343 21.0967836,12.9586657 20.2244055,13.83625 Z"
        id="boron-ui__icon-tags__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-tags__icon-/-icon-tags"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-tags__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-tags__path-1" />
      </mask>
      <use
        id="boron-ui__icon-tags__Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-tags__path-1"
      />
    </g>
  </svg>
);
export default SvgIconTags;
