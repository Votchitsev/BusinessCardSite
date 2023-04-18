import {createSlice} from '@reduxjs/toolkit';

const errorSlice = createSlice({
	name: 'error',
	initialState: '',
	reducers: {
		setError(state, action) {
			state = action.payload as string;
			return state;
		},
	},
});

export default errorSlice.reducer;

export const {setError} = errorSlice.actions;
