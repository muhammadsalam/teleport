import { combineClassNames } from "~/utils/combineClassNames";
import styles from "./FolderItem.module.scss";
import { ReactComponent as FolderSVG } from "Icon/folder.svg";
import { FC, useState } from "react";

const FolderItem: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleActivating: () => void = () =>
        !isActive && setIsActive(!isActive);

    return (
        <div
            className={combineClassNames(
                styles.folderItem,
                isActive && styles.active
            )}
            onClick={handleActivating}
        >
            <div className={styles.folderItem_count}>150</div>
            <div className={styles.folderItem_button}>
                <span className={styles.folderItem_button_span}></span>
                <span className={styles.folderItem_button_span}></span>
                <span className={styles.folderItem_button_span}></span>
            </div>
            <FolderSVG />
            <p className={styles.folderItem_title}>
                Получи 15 материалов бесплатно
            </p>
        </div>
    );
};

export default FolderItem;
