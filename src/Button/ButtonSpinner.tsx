import * as React from "react";

export const ButtonSpinner = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>icon / icon-loading</title>
      <desc>Created with Sketch.</desc>
      <g
        id="icon-/-icon-loading"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <circle
          id="Oval"
          strokeOpacity="0.5"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          fillRule="nonzero"
          cx="12"
          cy="12"
          r="9"
        ></circle>
        <path
          d="M18.5932699,18 C20.0866659,16.4068549 21,14.2716749 21,11.924953 C21,6.99583756 16.9705627,3 12,3"
          id="Path"
          strokeOpacity="0.9"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="nonzero"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};
