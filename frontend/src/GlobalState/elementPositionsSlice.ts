import {createSlice} from '@reduxjs/toolkit';
import {type ElementPositionsType} from './types';

const elementPositionsSlice = createSlice({
	name: 'elementPositions',
	initialState: {
		elementPositions: [] as ElementPositionsType,
	},
	reducers: {
		initElementPosition(state, action) {
			state.elementPositions.push({
				index: action.payload.index as number,
				offsetTop: action.payload.offsetTop as number,
			},
			);
		},
	},
});

export default elementPositionsSlice.reducer;

export const {initElementPosition} = elementPositionsSlice.actions;
