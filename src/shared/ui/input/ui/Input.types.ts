import { Dispatch, HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLLabelElement> {
    type: "text" | "password" | "email";
    placeholder: string;
    label: string;
    state: string;
    setState: (value: string) => void;
    disabled?: boolean;

}