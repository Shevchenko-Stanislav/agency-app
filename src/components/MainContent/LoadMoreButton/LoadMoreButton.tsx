import classes from "./LoadMoreButton.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { loadMore, filterByCategory } from "../../../store/cardListSlice";

const LoadMoreButton = () => {

    const dispatch = useAppDispatch();
    const currentCategory = useAppSelector(state => state.cardList.currentCategory);

    const loadMoreItems = () => {
        dispatch(loadMore());
        dispatch(filterByCategory(currentCategory));
    }

    return(
        <div className={classes.load_more_btn__wrap}>
            <button type="button" onClick={loadMoreItems} className={classes.load_more_btn}>
                <span>LOAD MORE</span>
            </button>
        </div>
        
    )
}

export default LoadMoreButton;