import classes from "./Header.module.scss";

const ContactButton: React.FC = () => {
    return(
        <button type="button" className={classes.button}><span>CONTACT</span></button>
    )
}

export default ContactButton;