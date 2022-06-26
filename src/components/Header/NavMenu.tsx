import classes from "./Header.module.scss";

const NavMenu: React.FC = () => {
    return(
        <ul className={classes.nav_menu}>
            <li>
                <a href="#!">About</a>
            </li>
            <li>
                <a href="#!">Services</a>
            </li>
            <li>
                <a href="#!">Pricing</a>
            </li>
            <li>
                <a href="#!">Blog</a>
            </li>
        </ul>
    )
}

export default NavMenu;