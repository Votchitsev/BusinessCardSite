import {createSlice} from '@reduxjs/toolkit';
import ru from '../lang/ru';
import en from '../lang/en';
import {type LanguageState} from './types';

const initialState: LanguageState = {
	lang: 'ru',
	content: ru,
};

export const languageSlice = createSlice({
	name: 'Language',
	initialState,
	reducers: {
		changeLanguage(state, action) {
			state.lang = action.payload as 'ru' | 'en';

			if (action.payload === 'ru') {
				state.content = ru;
				return;
			}

			state.content = en;
		},
	},
});

export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;
