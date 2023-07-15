import { Dispatch, SetStateAction } from "react";

export type PopupProps = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    cancel?: () => void;
    agree: () => void;
}