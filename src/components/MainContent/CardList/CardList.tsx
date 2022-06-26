import CardListItem from "./CardListItem/CardListItem";
import { useAppSelector } from "../../../hooks/reduxHooks";
import classes from "./CardList.module.scss";

const CardList = () => {

    const cardArray = useAppSelector(state => state.cardList.currentCards)

    const cardList = cardArray.map(item => <CardListItem 
        key={item.id} 
        img={item.img}
        name={item.name}
        category={item.category}
        id={item.id}
    />)

    return(
        <div className={classes.card_list__wrap}>
            <div className={classes.card_list}>
                {cardList}
            </div>
        </div>
        
    )
}

export default CardList;