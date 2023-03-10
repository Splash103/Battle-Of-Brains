// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconArrowLeftIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.737 16.683l9.43 10.815-2.119 2.43L0 14.964 13.048 0l2.12 2.43-9.431 10.815h21.858v3.438H5.737z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconArrowLeftIcon;
/* prettier-ignore-end */
