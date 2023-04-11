import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getSocials} from '../api/requests';
import {type SocialsType} from './types';

export const fetchSocials = createAsyncThunk(
	'socials/fetchSocials',
	async () => {
		const response = await getSocials();
		return response.data as SocialsType;
	},
);

export const socialsSlice = createSlice({
	name: 'socials',
	initialState: {
		socials: [] as SocialsType,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchSocials.fulfilled,
			(state, action) => {
				state.socials = action.payload;
			},
		);
	},
});

export default socialsSlice.reducer;
