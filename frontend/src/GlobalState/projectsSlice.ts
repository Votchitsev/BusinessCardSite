import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {type ProjectsType} from './types';
import {getProjects} from '../api/requests';

export const fetchProjectsData = createAsyncThunk(
	'projects/fetchProjectsData',
	async () => {
		const response = await getProjects();
		return response.data as ProjectsType;
	},
);

const projectsSlice = createSlice({
	name: 'projects',
	initialState: {
		projects: [] as ProjectsType,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchProjectsData.fulfilled,
			(state, action) => {
				state.projects = action.payload;
			});
	},
});

export default projectsSlice.reducer;
