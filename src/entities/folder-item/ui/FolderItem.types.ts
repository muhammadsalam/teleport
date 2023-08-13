import { HTMLAttributes } from "react";

export interface FolderItemProps extends HTMLAttributes<HTMLDivElement> {
    count: number;
    text: string;
}

export type MenuPosition = {
    top: number;
    left: number;
}