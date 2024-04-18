import * as React from "react";
import { SVGProps } from "react";
const SvgIconCheck = (props: SVGProps<SVGSVGElement>) => (
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
        d="M7.23291045,11.3566184 C6.95086513,11.0862554 6.49357931,11.0862554 6.21153399,11.3566184 C5.92948867,11.6269814 5.92948867,12.0653263 6.21153399,12.3356893 L9.8226451,15.7972278 C10.1046904,16.0675907 10.5619762,16.0675907 10.8440216,15.7972278 L18.788466,8.18184316 C19.0705113,7.91148018 19.0705113,7.4731352 18.788466,7.20277223 C18.5064207,6.93240926 18.0491349,6.93240926 17.7670895,7.20277223 L10.3333333,14.3286214 L7.23291045,11.3566184 Z"
        id="boron-ui__icon-check__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-check__icon-/-icon-check"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-check__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-check__path-1" />
      </mask>
      <use
        id="boron-ui__icon-check__Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-check__path-1"
      />
    </g>
  </svg>
);
export default SvgIconCheck;
