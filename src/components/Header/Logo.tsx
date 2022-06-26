import logo from "../../img/logo.png";
import classes from "./Header.module.scss";

function Logo () {
    return(
        <a className={classes.logo} href="#!">
            <img src={logo} alt="logo"/>
            <span>Agency</span>
        </a>
        
    );
}

export default Logo;