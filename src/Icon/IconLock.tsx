import * as React from "react";
import { SVGProps } from "react";
const SvgIconLock = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12,3 C14.6509668,3 16.8,5.19787486 16.8,7.90909091 L16.8,7.90909091 L16.8,10.363 L17.6,10.3636364 C18.9254834,10.3636364 20,11.4625738 20,12.8181818 L20,18.5454545 C20,19.9010626 18.9254834,21 17.6,21 L6.4,21 C5.0745166,21 4,19.9010626 4,18.5454545 L4,12.8181818 C4,11.4625738 5.0745166,10.3636364 6.4,10.3636364 L7.199,10.363 L7.2,7.90909091 C7.2,5.27115097 9.23443903,3.11917902 11.7861892,3.00478312 Z M17.6,12 L6.4,12 C5.9581722,12 5.6,12.3663125 5.6,12.8181818 L5.6,18.5454545 C5.6,18.9973239 5.9581722,19.3636364 6.4,19.3636364 L17.6,19.3636364 C18.0418278,19.3636364 18.4,18.9973239 18.4,18.5454545 L18.4,12.8181818 C18.4,12.3663125 18.0418278,12 17.6,12 Z M12,4.63636364 C10.2326888,4.63636364 8.8,6.10161355 8.8,7.90909091 L8.8,7.90909091 L8.799,10.363 L15.2,10.363 L15.2,7.90909091 C15.2,6.16394035 13.8644138,4.73782228 12.1815866,4.6415444 Z"
        id="boron-ui__icon-lock__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-lock__icon-/-icon-lock"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-lock__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-lock__path-1" />
      </mask>
      <use
        id="boron-ui__icon-lock__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-lock__path-1"
      />
    </g>
  </svg>
);
export default SvgIconLock;
