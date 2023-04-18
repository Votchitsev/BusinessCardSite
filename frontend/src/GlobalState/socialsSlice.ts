import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getSocials} from '../api/requests';
import {type SocialsType} from './types';

export const fetchSocials = createAsyncThunk(
	'socials/fetchSocials',
	async () => {
		const response = await getSocials();

		if (response.statusText !== 'OK' || !Array.isArray(response.data)) {
			throw new Error('Oops :( something wrong!');
		}

		return response.data as SocialsType;
	},
);

export const socialsSlice = createSlice({
	name: 'socials',
	initialState: {
		socials: [] as SocialsType,
		isError: '',
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchSocials.fulfilled,
			(state, action) => {
				state.socials = action.payload;
			},
		);
		builder.addCase(
			fetchSocials.rejected,
			(state, action) => {
				state.isError = action.error.message!;
				return state;
			},
		);
	},
});

export default socialsSlice.reducer;
