// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.846 7.634c.703 0 1.387.184 1.99.537l.243.143a.326.326 0 01.066.513l-2.083 2.077a.328.328 0 01-.464 0L5.528 8.84a.326.326 0 01.064-.512l.241-.143a3.928 3.928 0 012.013-.551zm0-3.817c1.75 0 3.43.58 4.799 1.655l.193.152c.154.121.168.35.03.488l-1.245 1.24a.328.328 0 01-.427.031l-.152-.112a5.344 5.344 0 00-3.198-1.056A5.344 5.344 0 004.63 7.283l-.152.114a.328.328 0 01-.428-.03l-1.244-1.24a.326.326 0 01.028-.487l.193-.152a7.745 7.745 0 014.818-1.671z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.846 0c2.777 0 5.433.98 7.535 2.775l.18.154a.326.326 0 01.018.479l-1.24 1.236a.328.328 0 01-.442.02l-.154-.129a9.163 9.163 0 00-5.897-2.137A9.163 9.163 0 001.932 4.55l-.154.129a.328.328 0 01-.442-.019L.096 3.423a.326.326 0 01.018-.479l.179-.153A11.564 11.564 0 017.846 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
