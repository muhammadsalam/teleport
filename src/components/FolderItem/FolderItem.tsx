import { combineClassNames } from "~/utils/combineClassNames";
import styles from "./FolderItem.module.scss";
import { ReactComponent as PencilSVG } from "Icon/pencil.svg";
import { ReactComponent as DeleteSVG } from "Icon/delete.svg";
import { ReactComponent as FolderSVG } from "Icon/folder.svg";
import { FC, useRef, useState } from "react";
import { FolderItemProps, MenuPosition } from "./FolderItem.types";
import { useOutsideClick } from "~/hooks/useOutsideClick";
import { CSSTransition } from "react-transition-group";

const FolderItem: FC<FolderItemProps> = ({ count, text }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [menuPosition, setMenuPosition] = useState<MenuPosition>({
        top: 0,
        left: 0,
    });

    const handleActivating: () => void = () =>
        !isActive && setIsActive(!isActive);

    const handleContext: () => void = () => {
        setIsMounted(!isMounted);
    };

    const contextRef = useRef<HTMLDivElement>(null);

    useOutsideClick(contextRef, handleContext);

    return (
        <div className={styles.folder}>
            <div
                className={combineClassNames(
                    styles.folderItem,
                    isActive && styles.active
                )}
                onClick={handleActivating}
            >
                <div className={styles.folderItem_count}>{count}</div>
                <div
                    className={styles.folderItem_button}
                    onClick={handleContext}
                >
                    <span className={styles.folderItem_button_span}></span>
                    <span className={styles.folderItem_button_span}></span>
                    <span className={styles.folderItem_button_span}></span>
                </div>
                <FolderSVG className={styles.folderItem_icon} />
                <p className={styles.folderItem_title}>{text}</p>
            </div>
            <CSSTransition
                in={isMounted}
                timeout={300}
                nodeRef={contextRef}
                classNames={{
                    enterActive: styles.contextBlock__enter,
                    enterDone: styles.contextBlock__done,
                }}
                unmountOnExit
            >
                <div className={styles.contextBlock} ref={contextRef}>
                    <ul className={styles.context}>
                        <li className={styles.context_item}>
                            <PencilSVG className={styles.context_icon} />{" "}
                            Редактировать папку
                        </li>
                        <li className={styles.context_item}>
                            <DeleteSVG className={styles.context_icon} />{" "}
                            Удалить папку
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
};

export default FolderItem;
