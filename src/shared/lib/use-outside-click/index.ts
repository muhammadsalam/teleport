import { useEffect, RefObject } from "react";

export const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: () => void,
    secondaryStyle?: string
): void => {
    const handleClick = (event: MouseEvent) => {
        const isOutsideClick = ref.current && !ref.current.contains(event.target as Node)
        const hasSecondaryClass = secondaryStyle && (event.target as HTMLElement).closest(`.${secondaryStyle}`);

        if (isOutsideClick && !hasSecondaryClass) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
};
