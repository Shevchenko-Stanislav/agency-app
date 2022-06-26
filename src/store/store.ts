import { configureStore } from "@reduxjs/toolkit";
import cardListSlice from "./cardListSlice";

const store = configureStore({
    reducer: {
        cardList: cardListSlice,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;