import ContactButton from "./ContactButton";
import classes from "./Header.module.scss";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header () {
    return(
        <div className={classes.header__bg}>
            <div className={classes.content}>
                <Logo />
                <NavMenu />
                <ContactButton />
            </div>
        </div>
        
    );
}

export default Header;