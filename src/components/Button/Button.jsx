import './Button.scss';
import { ReactComponent as PlusSVG } from '../../assets/images/icons/plus.svg';
import { ReactComponent as PencilSVG } from '../../assets/images/icons/pencil.svg';
import { ReactComponent as OpenSVG } from '../../assets/images/icons/open.svg';
import { ReactComponent as CopySVG } from '../../assets/images/icons/copy.svg';

export const BtnHug = ({ disabled = false, variant = 'red', children, onClick = () => { } }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--hug button--${variant}`}>{children}</button>
    );
}

export const BtnDefault = ({ disabled = false, children, onClick = () => { } }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--fixed button--red`}>
            <PlusSVG className='button_icon' />
            {children}
        </button>
    )
}

export const BtnPrimary = ({ disabled = false, children, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--fixed button--primary`}>
            <PencilSVG className='button_icon' />
            {children}
        </button>
    )
}

export const BtnSecondary = ({ disabled = false, children, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--fixed button--secondary button--secondary-open`}>
            <OpenSVG className='button_icon' />
            {children}
        </button>
    )
}

export const BtnSecondaryTwo = ({ disabled = false, children, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--fixed button--secondary`}>
            <PlusSVG className='button_icon' />
            {children}
        </button>
    )
}

export const BtnTertiary = ({ disabled = false, children, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--fixed button--tertiary`}>
            {children}
        </button>
    )
}

export const BtnLink = ({ disabled = false, children, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`button button--fixed button--secondary button--link`}>
            <CopySVG className='button_icon' />
            {children}
        </button>
    )
}