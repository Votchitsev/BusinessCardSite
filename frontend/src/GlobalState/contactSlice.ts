import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getContact} from '../api/requests';
import {type ContactType} from './types';

export const fetchContact = createAsyncThunk(
	'contacts/fetchContact',
	async (lang: string) => {
		const response = await getContact(lang);

		if (response.statusText !== 'OK' || !Array.isArray(response.data)) {
			throw new Error('Oops :( something wrong!');
		}

		return response.data[0] as ContactType;
	},
);

const contactSlice = createSlice({
	name: 'contacts',
	initialState: {
		isError: '',
		contacts: {},
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchContact.fulfilled,
			(state, action) => {
				state.contacts = action.payload;
			},
		);
		builder.addCase(
			fetchContact.rejected,
			(state, action) => {
				state.isError = action.error.message!;
				return state;
			},
		);
	},
});

export default contactSlice.reducer;
