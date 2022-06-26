import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardList } from "../Data/cardListData";
import { categoriesList } from "../Data/categoriesList";
import { cardItemType, categoryType } from "../types/types";

let currentPageIndex = 1;
const itemsPerPage = 9;

function getCurrentPage (current: number, itemsPerPage: number): cardItemType[] {
    const lastIndex = current * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentPage = cardList.slice(firstIndex, lastIndex);
    return currentPage
}

const firstPage = getCurrentPage(currentPageIndex, itemsPerPage);

const categories: Array<categoryType> = categoriesList;

const initialState = {
    cards: firstPage,
    currentCards: firstPage,
    categories: categories,
    currentCategory: "Show All",
    isShowingDropdownList: false
}


const cardListSlice = createSlice({
    name: "cardList",
    initialState,
    reducers: {
        loadMore (state) {
            currentPageIndex = currentPageIndex + 1;
            const nextPage = getCurrentPage(currentPageIndex, itemsPerPage)
            if (nextPage.length) {
                state.cards = state.cards.concat(nextPage);
            } else {
                currentPageIndex = currentPageIndex - 1;
            }    
        },

        filterByCategory (state, action: PayloadAction<string>) {
            state.currentCategory = action.payload;
            state.categories = state.categories.map(item => {
                if (item.name === state.currentCategory) {
                    item.isActive = true;
                    return item
                } else {
                    item.isActive = false;
                    return item
                }
            })

            if (state.currentCategory === "Show All") {
                state.currentCards = state.cards;
            } else {
                state.currentCards = state.cards.filter(item => item.category === state.currentCategory);
            }
        },

        toggleShowingDropdownList (state) {
            state.isShowingDropdownList = !state.isShowingDropdownList;
        }

    }

});

export const { 
    loadMore, 
    filterByCategory, 
    toggleShowingDropdownList 
} = cardListSlice.actions;

export default cardListSlice.reducer;
