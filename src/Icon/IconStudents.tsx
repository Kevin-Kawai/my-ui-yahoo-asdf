import * as React from "react";
import { SVGProps } from "react";
const SvgIconStudents = (props: SVGProps<SVGSVGElement>) => (
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
        d="M19,19.2 C19,19.6418278 18.651777,20 18.2222222,20 C17.7926674,20 17.4444444,19.6418278 17.4444444,19.2 L17.4444444,17.6 C17.4444444,16.2745166 16.3997755,15.2 15.1111111,15.2 L8.88888889,15.2 C7.60022447,15.2 6.55555556,16.2745166 6.55555556,17.6 L6.55555556,19.2 C6.55555556,19.6418278 6.20733258,20 5.77777778,20 C5.34822297,20 5,19.6418278 5,19.2 L5,17.6 C5,15.390861 6.74111486,13.6 8.88888889,13.6 L15.1111111,13.6 C17.2588851,13.6 19,15.390861 19,17.6 L19,19.2 Z M12,12 C9.85222597,12 8.11111111,10.209139 8.11111111,8 C8.11111111,5.790861 9.85222597,4 12,4 C14.147774,4 15.8888889,5.790861 15.8888889,8 C15.8888889,10.209139 14.147774,12 12,12 Z M12,10.4 C13.2886644,10.4 14.3333333,9.3254834 14.3333333,8 C14.3333333,6.6745166 13.2886644,5.6 12,5.6 C10.7113356,5.6 9.66666667,6.6745166 9.66666667,8 C9.66666667,9.3254834 10.7113356,10.4 12,10.4 Z"
        id="boron-ui__icon-students__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-students__icon-/-icon-students"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-students__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-students__path-1" />
      </mask>
      <use
        id="boron-ui__icon-students__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-students__path-1"
      />
    </g>
  </svg>
);
export default SvgIconStudents;
