import { createSlice } from '@reduxjs/toolkit';
import { loadSelectedItems, saveSelectedItems } from '../../services/storage.service';

const selectedItemsSlice = createSlice({
    name: 'selectedItems',
    initialState: {
        items: loadSelectedItems() || []
    },
    reducers: {
        addSelectedItem: (state, action) => {
            state.items.push(action.payload);
            saveSelectedItems(state.items);
        },
        updateItemPrice: (state, action) => {
            const { itemId, location, price } = action.payload;
            const item = state.items.find(i => i.id === itemId);
            if (item) {
                item.prices[location] = price;
                saveSelectedItems(state.items);
            }
        },
        removeSelectedItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveSelectedItems(state.items);
        }
    }
});

export const { addSelectedItem, updateItemPrice, removeSelectedItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
