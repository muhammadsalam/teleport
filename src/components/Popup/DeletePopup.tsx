import { FC, useState } from "react";
import style from "./DeletePopup.module.scss";
import Popup from "./Popup";
import { BtnHug } from "../Button/Button";
import { PopupProps } from "./Popup.types";
import { ReactComponent as TrashIcon } from "Icon/trash.svg";

const DeletePopup: FC<PopupProps> = ({ isActive, setIsActive, agree }) => {
    return isActive ? (
        <Popup setActive={setIsActive}>
            <TrashIcon style={{ display: "block", margin: "0 auto" }} />
            <div className={style.title}>Удалить папку</div>
            <p className={style.text}>
                Вы действительно хотите удалить эту страницу?
            </p>
            <div className={style.buttons}>
                <BtnHug
                    variant="secondary"
                    onClick={() => {
                        setIsActive(false);
                    }}
                >
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
