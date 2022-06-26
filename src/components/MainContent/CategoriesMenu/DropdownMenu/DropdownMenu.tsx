import classes from "./DropdownMenu.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAppSelector, useAppDispatch } from "../../../../hooks/reduxHooks";
import { toggleShowingDropdownList, filterByCategory } from "../../../../store/cardListSlice";


const DropdownMenu = () => {
    const currentCategory = useAppSelector(state => state.cardList.currentCategory);
    const categories = useAppSelector(state => state.cardList.categories);
    const isShowingDropdownList = useAppSelector(state => state.cardList.isShowingDropdownList);

    const dispatch = useAppDispatch();

    const categorieList = categories.map((item, index) => (
        <li 
            key={index} 
            className={classes.dropdown_list__item}
            onClick={() => filter(item.name)}
        >
            {item.name}
        </li>
    ));

    function toggleDropdownList () {
        dispatch(toggleShowingDropdownList());
    }

    function filter (itemName: string) {
        dispatch(filterByCategory(itemName));
        dispatch(toggleShowingDropdownList());
    }

    return(
        <div className={classes.dropdown_menu__wrapper}>
            <button className={classes.dropdown_menu} onClick={toggleDropdownList}>
                <span>
                    {currentCategory}
                </span>
                <div className={classes.dropdown_arrow}>
                    <RiArrowDropDownLine size={36} fill="red" />
                </div>
            </button>

            {isShowingDropdownList && 
                <ul className={classes.dropdown_list}>
                    {categorieList}
                </ul>
            }

        </div>
        
    )
}

export default DropdownMenu;