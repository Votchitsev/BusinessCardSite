import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getEducation} from '../api/requests';
import {type EducationType} from '../GlobalState/types';

export const fetchEducation = createAsyncThunk(
	'education/fetchEducation',
	async (lang: string) => {
		const response = await getEducation(lang);

		if (response.statusText !== 'OK' || !Array.isArray(response.data)) {
			throw new Error('Ups ;( something wrong!');
		}

		return response.data as EducationType;
	},
);

const educationSlice = createSlice({
	name: 'education',
	initialState: {
		education: [] as EducationType,
		isError: '',
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchEducation.fulfilled,
			(state, action) => {
				state.education = action.payload;
			});
		builder.addCase(
			fetchEducation.rejected,
			(state, action) => {
				state.isError = action.error.message!;
			},
		);
	},
});

export default educationSlice.reducer;
