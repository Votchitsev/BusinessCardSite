import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getEducation} from '../api/requests';
import {type EducationType} from '../GlobalState/types';

export const fetchEducation = createAsyncThunk(
	'education/fetchEducation',
	async (lang: string) => {
		const response = await getEducation(lang);
		return response.data as EducationType;
	},
);

const educationSlice = createSlice({
	name: 'education',
	initialState: {
		loading: 'loaded',
		education: [] as EducationType,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchEducation.fulfilled, (state, action) => {
			state.education = action.payload;
		});
	},
});

export default educationSlice.reducer;
