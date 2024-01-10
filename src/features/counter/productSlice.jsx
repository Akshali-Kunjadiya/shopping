import { createSlice } from '@reduxjs/toolkit';

const product = createSlice({
    name: "product",
    initialState: {
        id:1,
        title: "Dipesh",
        category: "programmer",
    },
    reducers: {
        setProducts(state,action){
            return state;
        },
        selectProduct(state,action){},
    },

});

export default product.reducer;