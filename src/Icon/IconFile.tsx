import * as React from "react";
import { SVGProps } from "react";
const SvgIconFile = (props: SVGProps<SVGSVGElement>) => (
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
        d="M17.4444444,10.9545455 L12.7777778,10.9545455 C12.348223,10.9545455 12,10.6085837 12,10.1818182 L12,5.54545455 L7.33333333,5.54545455 C6.90377853,5.54545455 6.55555556,5.89141633 6.55555556,6.31818182 L6.55555556,18.6818182 C6.55555556,19.1085837 6.90377853,19.4545455 7.33333333,19.4545455 L16.6666667,19.4545455 C17.0962215,19.4545455 17.4444444,19.1085837 17.4444444,18.6818182 L17.4444444,10.9545455 L18.2222222,10.9545455 C18.651777,10.9545455 19,10.6085837 19,10.1818182 C19,10.0751268 18.9782361,9.97348567 18.9388784,9.88103785 C18.9795139,9.97897662 19,10.0793482 19,10.1818182 L19,18.6818182 C19,19.9621146 17.9553311,21 16.6666667,21 L7.33333333,21 C6.04466892,21 5,19.9621146 5,18.6818182 L5,6.31818182 C5,5.03788535 6.04466892,4 7.33333333,4 L12.7777778,4 C12.9840573,4 13.1818881,4.0814121 13.3277497,4.22632658 L18.7721942,9.63541749 C18.845125,9.70787472 18.9020764,9.79323989 18.9407952,9.88610826 Z M13.5555556,6.63825593 L13.5555556,9.40909091 L16.3445006,9.40909091 L13.5555556,6.63825593 Z"
        id="boron-ui__icon-file__path-1"
      />
    </defs>
    <g
      id="boron-ui__icon-file__icon-/-icon-file"
      stroke="none"
      strokeWidth={1}
      fill="currentColor"
      fillRule="evenodd"
    >
      <mask id="boron-ui__icon-file__mask-2" fill="currentColor">
        <use xlinkHref="#boron-ui__icon-file__path-1" />
      </mask>
      <use
        id="boron-ui__icon-file__Combined-Shape"
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#boron-ui__icon-file__path-1"
      />
    </g>
  </svg>
);
export default SvgIconFile;
