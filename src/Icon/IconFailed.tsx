import * as React from "react";
import { SVGProps } from "react";
const SvgIconFailed = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12,0 C5.37096774,0 0,5.37096774 0,12 C0,18.6290323 5.37096774,24 12,24 C18.6290323,24 24,18.6290323 24,12 C24,5.37096774 18.6290323,0 12,0 Z M16.9258065,8.99032258 L13.916129,12 L16.9258065,15.0096774 C17.1532258,15.2370968 17.1532258,15.6048387 16.9258065,15.8322581 L15.8322581,16.9258065 C15.6048387,17.1532258 15.2370968,17.1532258 15.0096774,16.9258065 L12,13.916129 L8.99032258,16.9258065 C8.76290323,17.1532258 8.39516129,17.1532258 8.16774194,16.9258065 L7.07419355,15.8322581 C6.84677419,15.6048387 6.84677419,15.2370968 7.07419355,15.0096774 L10.083871,12 L7.07419355,8.99032258 C6.84677419,8.76290323 6.84677419,8.39516129 7.07419355,8.16774194 L8.16774194,7.07419355 C8.39516129,6.84677419 8.76290323,6.84677419 8.99032258,7.07419355 L12,10.083871 L15.0096774,7.07419355 C15.2370968,6.84677419 15.6048387,6.84677419 15.8322581,7.07419355 L16.9258065,8.16774194 C17.1532258,8.39516129 17.1532258,8.76290323 16.9258065,8.99032258 Z"
        id="boron-ui__icon-failed__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-failed__icon-/-icon-failed"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-failed__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-failed__path-1" />
      </mask>
      <use
        id="boron-ui__icon-failed__times-circle"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-failed__path-1"
      />
    </g>
  </svg>
);
export default SvgIconFailed;
