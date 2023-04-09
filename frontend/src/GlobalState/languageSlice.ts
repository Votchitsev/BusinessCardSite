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
		changeLanguage(state) {
			if (state.lang === 'ru') {
				state.lang = 'en';
				state.content = en;
				return;
			}

			state.lang = 'ru';
			state.content = en;
		},
	},
});

export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;
