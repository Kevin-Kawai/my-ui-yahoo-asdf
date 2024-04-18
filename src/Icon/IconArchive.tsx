import * as React from "react";
import { SVGProps } from "react";
const SvgIconArchive = (props: SVGProps<SVGSVGElement>) => (
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
        d="M9.10757692,5.6 L5.45454545,5.6 C5.00267611,5.6 4.63636364,5.9581722 4.63636364,6.4 L4.63636364,17.6 C4.63636364,18.0418278 5.00267611,18.4 5.45454545,18.4 L18.5454545,18.4 C18.9973239,18.4 19.3636364,18.0418278 19.3636364,17.6 L19.3636364,8.8 C19.3636364,8.3581722 18.9973239,8 18.5454545,8 L11.1818182,8 C10.9082565,8 10.6527945,7.86631909 10.5010498,7.64376016 L9.10757692,5.6 Z M11.6196958,6.4 L18.5454545,6.4 C19.9010626,6.4 21,7.4745166 21,8.8 L21,17.6 C21,18.9254834 19.9010626,20 18.5454545,20 L5.45454545,20 C4.09893743,20 3,18.9254834 3,17.6 L3,6.4 C3,5.0745166 4.09893743,4 5.45454545,4 L9.54545455,4 C9.81901624,4 10.0744782,4.13368091 10.226223,4.35623984 L11.6196958,6.4 Z"
        id="boron-ui__icon-archive__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-archive__icon-/-icon_archive"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-archive__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-archive__path-1" />
      </mask>
      <use
        id="boron-ui__icon-archive__Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-archive__path-1"
      />
    </g>
  </svg>
);
export default SvgIconArchive;
