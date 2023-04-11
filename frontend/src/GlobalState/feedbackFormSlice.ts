import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {postFeedbackMessage} from '../api/requests';
import {type FormDataType} from './types';
import {type AxiosResponse} from 'axios';

export const postFeedback = createAsyncThunk(
	'feedbackForm/postFeedback',
	async (data: FormDataType) => {
		const response = await postFeedbackMessage(data);
		return response.data as AxiosResponse;
	},
);

const feedbackFormSlice = createSlice({
	name: 'feedbackForm',
	initialState: {
		isLoaded: false,
		isError: '',
	},
	reducers: {
		setIsLoaded(state, action) {
			state.isLoaded = action.payload as boolean;
		},
	},
	extraReducers(builder) {
		builder.addCase(
			postFeedback.fulfilled,
			state => {
				state.isLoaded = true;
			},
		);
		builder.addCase(
			postFeedback.rejected,
			(state, action) => {
				console.log(action);
				state.isError = action.error.message!;
			},
		);
	},
});

export const {
	setIsLoaded,
} = feedbackFormSlice.actions;

export default feedbackFormSlice.reducer;
