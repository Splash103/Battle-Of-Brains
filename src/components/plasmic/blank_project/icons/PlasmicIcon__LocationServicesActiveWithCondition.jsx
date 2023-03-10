// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LocationServicesActiveWithConditionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.84 6.41c-1.326.6-1.005 2.447.424 2.454l4.874.013c.061 0 .054-.02.054.048L7.2 13.78c.007 1.45 1.866 1.736 2.482.383l5.004-10.917c.67-1.456-.438-2.516-1.894-1.853L1.84 6.41zm2.577.758c-.034 0-.041-.02 0-.04l8.196-3.733c.048-.02.09-.007.055.055l-3.74 8.19c-.02.033-.047.026-.047-.008l.027-3.595c.007-.636-.253-.896-.888-.889l-3.603.02z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LocationServicesActiveWithConditionIcon;
/* prettier-ignore-end */
