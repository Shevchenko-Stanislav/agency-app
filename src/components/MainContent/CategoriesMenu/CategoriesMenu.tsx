import classes from "./CategoriesMenu.module.scss";
import CategoriesMenuItem from "./CategoriesMenuItem";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { useAppSelector } from "../../../hooks/reduxHooks";

const CategoriesMenu = () => {
    const categories = useAppSelector(state => state.cardList.categories);
    const categoriesList = categories.map((item, index) => <CategoriesMenuItem 
        key={index} 
        name={item.name}
        isActive={item.isActive}
    />);
    return(
        <>
            <ul className={classes.menu}>
                {categoriesList}
            </ul>
            <DropdownMenu />
        </>
    )
}

export default CategoriesMenu;