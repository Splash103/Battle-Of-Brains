// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconInfoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M8.5 17a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-1.546a6.954 6.954 0 100-13.908 6.954 6.954 0 000 13.909zm.776-5.41h.772v1.546H6.957v-1.546h.773V8.5h-.773V6.953h2.319v3.091zM8.5 6.181a.773.773 0 110-1.546.773.773 0 010 1.546z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconInfoIcon;
/* prettier-ignore-end */
