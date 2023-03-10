// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconCircleCheckedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M12.269 24.538C5.493 24.538 0 19.044 0 12.268 0 5.494 5.493 0 12.269 0s12.269 5.493 12.269 12.269-5.493 12.269-12.27 12.269zm0-2.231c5.544 0 10.038-4.494 10.038-10.038 0-5.544-4.494-10.038-10.038-10.038C6.725 2.23 2.23 6.725 2.23 12.269c0 5.544 4.494 10.038 10.038 10.038zm-2.23-8.27l5.902-5.903 1.578 1.577-7.48 7.481-4.136-4.135 1.578-1.577 2.557 2.557z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCircleCheckedIcon;
/* prettier-ignore-end */
