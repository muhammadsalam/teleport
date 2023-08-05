import style from "./Popup.module.scss";
import { FC, ReactNode, useRef } from "react";
import { ReactComponent as CloseSVG } from "Icon/close.svg";
import { useOutsideClick } from "~/shared/lib/use-outside-click";

const Popup: FC<{
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
                <CloseSVG className={style.close} onClick={handleClose} />
                {children}
            </div>
        </div>
    );
};

export default Popup;
