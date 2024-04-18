import * as React from "react";
import { SVGProps } from "react";
const SvgIconEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    {...props}
  >
    <g
      id="boron-ui__icon-ellipsis__icon-/-icon-ellipsis"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <path
        d="M12.5,9 C13.325,9 14,8.325 14,7.5 C14,6.675 13.325,6 12.5,6 C11.675,6 11,6.675 11,7.5 C11,8.325 11.675,9 12.5,9 Z M12.5,11 C11.675,11 11,11.675 11,12.5 C11,13.325 11.675,14 12.5,14 C13.325,14 14,13.325 14,12.5 C14,11.675 13.325,11 12.5,11 Z M12.5,16 C11.675,16 11,16.675 11,17.5 C11,18.325 11.675,19 12.5,19 C13.325,19 14,18.325 14,17.5 C14,16.675 13.325,16 12.5,16 Z"
        id="boron-ui__icon-ellipsis__more"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);
export default SvgIconEllipsis;
