// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './slices/marketSlice';
import selectedItemsReducer from './slices/selectedItemsSlice';

export const store = configureStore({
    reducer: {
        market: marketReducer,
        selectedItems: selectedItemsReducer
    }
});