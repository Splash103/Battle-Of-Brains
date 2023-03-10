// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BatteryFrameIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.6 1h13.8c.997 0 1.684 0 2.217.044.522.043.808.122 1.018.228a2.5 2.5 0 011.092 1.093c.107.21.186.496.229 1.018.043.533.044 1.22.044 2.217v1.8c0 .997 0 1.684-.044 2.217-.043.522-.122.808-.229 1.018a2.5 2.5 0 01-1.092 1.092c-.21.107-.496.186-1.018.229-.533.043-1.22.044-2.217.044H5.6c-.997 0-1.684 0-2.217-.044-.522-.043-.808-.121-1.018-.229a2.5 2.5 0 01-1.093-1.092c-.106-.21-.185-.496-.228-1.018C1.001 9.084 1 8.397 1 7.4V5.6c0-.997 0-1.684.044-2.217.043-.522.122-.808.228-1.018a2.5 2.5 0 011.093-1.093c.21-.106.496-.185 1.018-.228C3.916 1.001 4.603 1 5.6 1zM0 5.6c0-1.96 0-2.94.381-3.689a3.5 3.5 0 011.53-1.53C2.66 0 3.64 0 5.6 0h13.8c1.96 0 2.94 0 3.689.381a3.5 3.5 0 011.53 1.53C25 2.66 25 3.64 25 5.6v1.8c0 1.96 0 2.94-.381 3.689a3.5 3.5 0 01-1.53 1.53C22.34 13 21.36 13 19.4 13H5.6c-1.96 0-2.94 0-3.689-.382a3.5 3.5 0 01-1.53-1.529C0 10.34 0 9.36 0 7.4V5.6zm26 2.9c.828-.2 1.5-.895 1.5-2s-.672-1.8-1.5-2v4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BatteryFrameIcon;
/* prettier-ignore-end */
