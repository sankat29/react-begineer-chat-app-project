import { createSlice } from '@reduxjs/toolkit';

import {dummyComments} from '../data/comments';

export const commentsSlice = createSlice({
    name: 'comments_redux_slice',
    initialState: JSON.parse(localStorage.getItem('COMMENTS_DB')) ? JSON.parse(localStorage.getItem('COMMENTS_DB')) : dummyComments,
    reducers: {
        addANewComment: (state, action) => {
            const allChats = [...state, action.payload];
            localStorage.setItem('COMMENTS_DB', JSON.stringify(allChats));
            return allChats;
        }
     }
});

export const { addANewComment } = commentsSlice.actions

export default commentsSlice.reducer;