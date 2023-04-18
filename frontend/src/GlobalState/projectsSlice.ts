import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {type ProjectsType} from './types';
import {getProjects} from '../api/requests';

export const fetchProjectsData = createAsyncThunk(
	'projects/fetchProjectsData',
	async () => {
		const response = await getProjects();

		if (response.statusText !== 'OK' || !Array.isArray(response.data)) {
			throw new Error('Oops :( something wrong');
		}

		return response.data as ProjectsType;
	},
);

const projectsSlice = createSlice({
	name: 'projects',
	initialState: {
		projects: [] as ProjectsType,
		isError: '',
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchProjectsData.fulfilled,
			(state, action) => {
				state.projects = action.payload;
			});
		builder.addCase(
			fetchProjectsData.rejected,
			(state, action) => {
				state.isError = action.error.message!;
				return state;
			},
		);
	},
});

export default projectsSlice.reducer;
