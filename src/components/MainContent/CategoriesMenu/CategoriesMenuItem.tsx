import { useAppDispatch } from "../../../hooks/reduxHooks";
import classes from "./CategoriesMenu.module.scss";
import { filterByCategory } from "../../../store/cardListSlice";

interface IMenuItemProps {
    name: string;
    isActive: boolean
}

const CategoriesMenuItem: React.FC<IMenuItemProps> = (props) => {
    const dispatch = useAppDispatch();

    function filter () {
        dispatch(filterByCategory(props.name));
    }

    return(
        <>
            {props.isActive
                ? 
                    <li onClick={filter} className={classes.active}>
                        {props.name}
                    </li>
                : 
                    <li onClick={filter}>
                        {props.name}
                    </li>
            }
        </>
        
    )
}

export default CategoriesMenuItem;