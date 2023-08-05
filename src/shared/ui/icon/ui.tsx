import { FC } from "react";
import { icon_type } from "./icon.types";

export const Icon: FC<icon_type> = ({ name }) => (
    <svg className="Icon">
        <use xlinkHref={`./assets/${name}.svg`} />
    </svg>
);
