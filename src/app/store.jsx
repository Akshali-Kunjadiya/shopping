import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "../features/counter/productSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
    },
});
 
export default store;