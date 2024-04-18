import * as React from "react";
import { SVGProps } from "react";
const SvgIconRecord = (props: SVGProps<SVGSVGElement>) => (
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
        d="M5.6,15.5313708 L5.6,18.4 L8.46862915,18.4 L18.0686292,8.8 L15.2,5.93137085 L5.6,15.5313708 Z M15.7656854,4.23431458 L19.7656854,8.23431458 C20.0781049,8.54673401 20.0781049,9.05326599 19.7656854,9.36568542 L9.36568542,19.7656854 C9.21565632,19.9157145 9.01217319,20 8.8,20 L4.8,20 C4.3581722,20 4,19.6418278 4,19.2 L4,15.2 C4,14.9878268 4.08428547,14.7843437 4.23431458,14.6343146 L14.6343146,4.23431458 C14.946734,3.92189514 15.453266,3.92189514 15.7656854,4.23431458 Z"
        id="boron-ui__icon-record__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-record__icon-/-icon-record"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-record__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-record__path-1" />
      </mask>
      <use
        id="boron-ui__icon-record__Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-record__path-1"
      />
    </g>
  </svg>
);
export default SvgIconRecord;
