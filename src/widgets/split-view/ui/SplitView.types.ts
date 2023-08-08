import { FC, FormEvent, MouseEvent, ReactNode } from "react";

export type handleFormSubmiting = (e: FormEvent<HTMLFormElement>) => void;

export interface SplitViewProps {
    handleFormSubmiting: handleFormSubmiting;
    Image: FC;
    children: ReactNode;
}