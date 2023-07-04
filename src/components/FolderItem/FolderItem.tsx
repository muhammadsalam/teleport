import { combineClassNames } from "~/utils/combineClassNames";
import styles from "./FolderItem.module.scss";
import { ReactComponent as FolderSVG } from "Icon/folder.svg";
import { FC, useState } from "react";
import { FolderItemProps } from "./FolderItem.types";

const FolderItem: FC<FolderItemProps> = ({ count, text }) => {
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
            <div className={styles.folderItem_count}>{count}</div>
            <div className={styles.folderItem_button}>
                <span className={styles.folderItem_button_span}></span>
                <span className={styles.folderItem_button_span}></span>
                <span className={styles.folderItem_button_span}></span>
            </div>
            <FolderSVG />
            <p className={styles.folderItem_title}>{text}</p>
        </div>
    );
};

export default FolderItem;
