import {createSlice} from '@reduxjs/toolkit';
import ru from '../lang/ru';
import en from '../lang/en';
import {getFromLocalStorage, setToLocalStorage} from '../utils/LocalStorage';
import {type LanguageState} from './types';

const bindContentObject = {ru, en};

const storageLang = getFromLocalStorage('lang');

const initialState: LanguageState = {
	lang: storageLang ? storageLang : 'ru',
	content: storageLang ? bindContentObject[storageLang] : ru,
};

export const languageSlice = createSlice({
	name: 'Language',
	initialState,
	reducers: {
		changeLanguage(state, action) {
			state.lang = action.payload as 'ru' | 'en';

			if (action.payload === 'ru') {
				state.content = ru;
				setToLocalStorage('lang', 'ru');
				return;
			}

			state.content = en;
			setToLocalStorage('lang', 'en');
		},
	},
});

export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;
