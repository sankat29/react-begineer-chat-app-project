import { configureStore } from '@reduxjs/toolkit'
import connectsReducer from './connectsSlice'
import commentsReducer from './commentsSlice'

export default configureStore({
  reducer: {
    connects_redux_slice: connectsReducer,
    comments_redux_slice: commentsReducer,
  },
})