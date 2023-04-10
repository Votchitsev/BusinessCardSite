import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import educationReducer from './educationSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		education: educationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
