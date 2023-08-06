import style from "./Popup.module.scss";
import { FC, ReactNode, useRef } from "react";
import { useOutsideClick } from "shared/lib";
import { Icon } from "shared/ui";

export const Popup: FC<{
    setActive: (value: boolean) => void;
    children: ReactNode;
}> = ({ setActive, children }) => {
    const handleClose = () => {
        setActive(false);
    };

    const popupRef = useRef<HTMLDivElement>(null);

    useOutsideClick(popupRef, handleClose);

    return (
        <div className={style.popup}>
            <div className={style.container} ref={popupRef}>
                <Icon
                    name="close"
                    className={style.close}
                    onClick={handleClose}
                />
                {children}
            </div>
        </div>
    );
};
