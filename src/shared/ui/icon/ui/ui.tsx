import { FC } from "react";
import { iconProps } from "./Icon.types";
import { ccn } from "shared/lib";
import { ReactSVG } from "react-svg";
import "./Icon.scss";

export const Icon: FC<iconProps> = ({ name, className, ...restProps }) => (
    <ReactSVG
        src={require(`../assets/${name}.svg`)}
        className={ccn("Icon", className)}
        {...(restProps as ReactSVG)}
    />
);
