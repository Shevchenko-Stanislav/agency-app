import classes from "./MainContent.module.scss";
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import CardList from "./CardList/CardList";

const MainContent = () => {
    return(
        <div className={classes.main__bg}>
            <CategoriesMenu />
            <CardList />
            <LoadMoreButton />
        </div>
    )
}

export default MainContent;