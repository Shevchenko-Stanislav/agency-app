import classes from "./CardListItem.module.scss";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { filterByCategory } from "../../../../store/cardListSlice";
 
interface ICardListItemProps {
    id: string,
    img: string,
    name: string,
    category: string
}


const CardListItem: React.FC<ICardListItemProps> = (props) => {
    const dispatch = useAppDispatch();

    function filter () {
        dispatch(filterByCategory(props.category));
    }

    return(
        <div className={classes.item__wrap}>
            <img src={props.img} alt="item" />
                <span className={classes.category} onClick={filter}>{props.category}</span>
            <span className={classes.name}>{props.name}</span>
        </div>
    )
}

export default CardListItem