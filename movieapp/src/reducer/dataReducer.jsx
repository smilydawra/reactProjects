import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        moviesData: {},
        isLoading: true,
    },
    reducers: {
        addMoviesData(state, action) {
            state.moviesData[action.payload] = action.payload;
        },
        setMoviesData(state, action) {
            state.moviesData = action.payload;
            state.isLoading = false;
        }
    }
});

export const {
    addMoviesData,
    setMoviesData
} = dataSlice.actions;

export default dataSlice.reducer;