import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, SurveyProperties } from '~/constant/initalState'

export const surveyFormSlice = createSlice({
    name: 'surveyForm',
    initialState,
    reducers: {
        setServeyForm: (state, action: PayloadAction<SurveyProperties>) => {
            state.survey = action.payload
        }
    }
})

export const { setServeyForm } = surveyFormSlice.actions
const surveyFormReducer = surveyFormSlice.reducer
export default surveyFormReducer
