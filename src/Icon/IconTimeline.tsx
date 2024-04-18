import * as React from "react";
import { SVGProps } from "react";
const SvgIconTimeline = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12,20.25 C7.44365081,20.25 3.75,16.5563492 3.75,12 C3.75,7.44365081 7.44365081,3.75 12,3.75 C16.5563492,3.75 20.25,7.44365081 20.25,12 C20.25,16.5563492 16.5563492,20.25 12,20.25 Z M12,18.75 C15.7279221,18.75 18.75,15.7279221 18.75,12 C18.75,8.27207794 15.7279221,5.25 12,5.25 C8.27207794,5.25 5.25,8.27207794 5.25,12 C5.25,15.7279221 8.27207794,18.75 12,18.75 Z M12.75,7.5 L12.75,11.6893398 L14.7803301,13.7196699 C15.0732233,14.0125631 15.0732233,14.4874369 14.7803301,14.7803301 C14.4874369,15.0732233 14.0125631,15.0732233 13.7196699,14.7803301 L11.4696699,12.5303301 C11.3290176,12.3896778 11.25,12.1989124 11.25,12 L11.25,7.5 C11.25,7.08578644 11.5857864,6.75 12,6.75 C12.4142136,6.75 12.75,7.08578644 12.75,7.5 Z"
        id="boron-ui__icon-timeline__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-timeline__icon-/-icon-timeline"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-timeline__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-timeline__path-1" />
      </mask>
      <use
        id="boron-ui__icon-timeline__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-timeline__path-1"
      />
    </g>
  </svg>
);
export default SvgIconTimeline;
