// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.523 13.545a1.547 1.547 0 01-.879 0C5.59 12.843 1 9.918 1 4.96 1 2.77 2.764 1 4.938 1c1.29 0 2.43.623 3.145 1.587A3.917 3.917 0 0111.228 1c2.175 0 3.939 1.77 3.939 3.96 0 4.958-4.59 7.883-6.644 8.585z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
