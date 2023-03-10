// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rectangle88Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 300 108"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 0h54.5L80 11l2.5 11V11L91 0h195l13.5 11v85.5l-13.5 11H91l-8.5-11v-14l-2.5 14-10.5 11H15l-15-11V11L15 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle88Icon;
/* prettier-ignore-end */
