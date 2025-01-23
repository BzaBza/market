import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMarketData } from '../../services/api.service';

export const getMarketData = createAsyncThunk(
    'market/getData',
    async ({ locations, dateFrom, dateTo }) => {
        const response = await fetchMarketData(locations, dateFrom, dateTo);
        return response;
    }
);

const marketSlice = createSlice({
    name: 'market',
    initialState: {
        data: [],
        loading: false,
        error: null,
        selectedLocations: []
    },
    reducers: {
        setLocations: (state, action) => {
            state.selectedLocations = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMarketData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMarketData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getMarketData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

