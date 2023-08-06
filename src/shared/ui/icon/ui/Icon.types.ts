import { CSSProperties, HTMLAttributes, MouseEventHandler } from "react";

export const icon_names = ['arrow-bottom'
    , 'arrow-left'
    , 'arrow-right'
    , 'book'
    , 'calendar'
    , 'close'
    , 'coin'
    , 'copy'
    , 'delete'
    , 'exit'
    , 'folder'
    , 'gear-wheel'
    , 'hide'
    , 'lamp'
    , 'net'
    , 'open'
    , 'page'
    , 'partners'
    , 'pencil'
    , 'plus'
    , 'trash'
    , 'unhide'] as const;

export interface iconProps extends HTMLAttributes<HTMLDivElement> {
    name: typeof icon_names[number];
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
}