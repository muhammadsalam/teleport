import { ReactNode } from "react";

export type tabListType = {
    icon: ReactNode;
    title: string;
    span?: ReactNode;
    to: string;
}[];