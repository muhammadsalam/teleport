import { FC, useState } from "react";
import style from "./DeletePopup.module.scss";
import Popup from "./Popup";
import { BtnHug } from "../Button/Button";
import { PopupProps } from "./Popup.types";
import { ReactComponent as TrashIcon } from "Icon/trash.svg";

const DeletePopup: FC<PopupProps> = ({ cancel, agree }) => {
    const [isDeletePopupActive, setIsDeletePopupActive] =
        useState<boolean>(true);

    return isDeletePopupActive ? (
        <Popup setActive={setIsDeletePopupActive}>
            <TrashIcon style={{ display: "block", margin: "0 auto" }} />
            <div className={style.title}>Удалить папку</div>
            <p className={style.text}>
                Вы действительно хотите удалить эту страницу?
            </p>
            <div className={style.buttons}>
                <BtnHug variant="secondary" onClick={cancel}>
                    Отмена
                </BtnHug>
                <BtnHug onClick={agree}>Удалить</BtnHug>
            </div>
        </Popup>
    ) : (
        <></>
    );
};

export default DeletePopup;
