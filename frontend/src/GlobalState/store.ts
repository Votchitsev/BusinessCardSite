import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import educationReducer from './educationSlice';
import projectsReducer from './projectsSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		education: educationReducer,
		projects: projectsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
