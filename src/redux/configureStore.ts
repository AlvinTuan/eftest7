import { combineReducers, configureStore } from '@reduxjs/toolkit'
import surveyFormReducer from './surveyForm/surveyFormSlice'
import logger from 'redux-logger'

const reducer = combineReducers({
    surveyForm: surveyFormReducer
})
export const store = configureStore({
    reducer,
    middleware: (gDM) => gDM().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
