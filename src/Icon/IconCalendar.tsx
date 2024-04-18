import * as React from "react";
import { SVGProps } from "react";
const SvgIconCalendar = (props: SVGProps<SVGSVGElement>) => (
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
        d="M18,9.75 L18,7.5 C18,7.08578644 17.6642136,6.75 17.25,6.75 L15.75,6.75 L15.75,7.5 C15.75,7.91421356 15.4142136,8.25 15,8.25 C14.5857864,8.25 14.25,7.91421356 14.25,7.5 L14.25,6.75 L9.75,6.75 L9.75,7.5 C9.75,7.91421356 9.41421356,8.25 9,8.25 C8.58578644,8.25 8.25,7.91421356 8.25,7.5 L8.25,6.75 L6.75,6.75 C6.33578644,6.75 6,7.08578644 6,7.5 L6,9.75 L18,9.75 Z M18,11.25 L6,11.25 L6,18 C6,18.4142136 6.33578644,18.75 6.75,18.75 L17.25,18.75 C17.6642136,18.75 18,18.4142136 18,18 L18,11.25 Z M9.75,5.25 L14.25,5.25 L14.25,4.5 C14.25,4.08578644 14.5857864,3.75 15,3.75 C15.4142136,3.75 15.75,4.08578644 15.75,4.5 L15.75,5.25 L17.25,5.25 C18.4926407,5.25 19.5,6.25735931 19.5,7.5 L19.5,18 C19.5,19.2426407 18.4926407,20.25 17.25,20.25 L6.75,20.25 C5.50735931,20.25 4.5,19.2426407 4.5,18 L4.5,7.5 C4.5,6.25735931 5.50735931,5.25 6.75,5.25 L8.25,5.25 L8.25,4.5 C8.25,4.08578644 8.58578644,3.75 9,3.75 C9.41421356,3.75 9.75,4.08578644 9.75,4.5 L9.75,5.25 Z"
        id="boron-ui__icon-calendar__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-calendar__icon-/-icon-calendar"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-calendar__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-calendar__path-1" />
      </mask>
      <use
        id="boron-ui__icon-calendar__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-calendar__path-1"
      />
    </g>
  </svg>
);
export default SvgIconCalendar;
