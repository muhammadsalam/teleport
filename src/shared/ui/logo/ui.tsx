import { Link } from "react-router-dom";
import style from "./.module.css";

export const Logo = () => {
    return (
        <Link to="/" className={style.logo}>
            T<span>ele</span>p<span>ort</span>
        </Link>
    );
};
