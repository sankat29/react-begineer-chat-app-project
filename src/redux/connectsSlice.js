import { createSlice } from '@reduxjs/toolkit';

import {connects} from '../data/connects';

export const connectsSlice = createSlice({
    name: 'connects_redux_slice',
    initialState: connects,
    reducers: {
        addANewConnect: (state, action) => {
            return [...state, ...action.payload]
        }
     }
});

export const { addANewConnect } = connectsSlice.actions

export default connectsSlice.reducer;