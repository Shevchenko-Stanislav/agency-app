import classes from "./Info.module.scss";

function Info () {
    return(
        <div className={classes.info__bg}>
            <div className={classes.content}>
                <div className={classes.title}>
                    Portfolio
                </div>
                <div className={classes.description}>
                    Agency provides a full service range including technical skills, design, business understanding.
                </div>
            </div>
        </div>
    );
}

export default Info;