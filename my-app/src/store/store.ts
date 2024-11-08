import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "@/redux/RootReducer";

export const store = configureStore({
    reducer: rootReducer
});

export default store;