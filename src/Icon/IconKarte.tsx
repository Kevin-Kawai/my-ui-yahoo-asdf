import * as React from "react";
import { SVGProps } from "react";
const SvgIconKarte = (props: SVGProps<SVGSVGElement>) => (
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
        d="M15.75,5.25 L16.5,5.25 C17.7426407,5.25 18.75,6.25735931 18.75,7.5 L18.75,18 C18.75,19.2426407 17.7426407,20.25 16.5,20.25 L7.5,20.25 C6.25735931,20.25 5.25,19.2426407 5.25,18 L5.25,7.5 C5.25,6.25735931 6.25735931,5.25 7.5,5.25 L8.25,5.25 C8.25,4.42157288 8.92157288,3.75 9.75,3.75 L14.25,3.75 C15.0784271,3.75 15.75,4.42157288 15.75,5.25 Z M8.25,6.75 L7.5,6.75 C7.08578644,6.75 6.75,7.08578644 6.75,7.5 L6.75,18 C6.75,18.4142136 7.08578644,18.75 7.5,18.75 L16.5,18.75 C16.9142136,18.75 17.25,18.4142136 17.25,18 L17.25,7.5 C17.25,7.08578644 16.9142136,6.75 16.5,6.75 L15.75,6.75 C15.75,7.57842712 15.0784271,8.25 14.25,8.25 L9.75,8.25 C8.92157288,8.25 8.25,7.57842712 8.25,6.75 Z M9.75,5.25 L9.75,6.75 L14.25,6.75 L14.25,5.25 L9.75,5.25 Z"
        id="boron-ui__icon-karte__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-karte__icon-/-icon-karte"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-karte__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-karte__path-1" />
      </mask>
      <use
        id="boron-ui__icon-karte__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-karte__path-1"
      />
    </g>
  </svg>
);
export default SvgIconKarte;
