import { FC } from "react";
import style from "./DeletePopup.module.scss";
import { BtnHug, Icon, Popup, PopupProps } from "shared/ui";

export const DeletePopup: FC<PopupProps> = ({
    isActive,
    setIsActive,
    agree,
}) => {
    return isActive ? (
        <Popup setActive={setIsActive}>
            <Icon name="trash" style={{ display: "block", margin: "0 auto" }} />
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
