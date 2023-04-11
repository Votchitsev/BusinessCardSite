import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import educationReducer from './educationSlice';
import projectsReducer from './projectsSlice';
import feedbackFormReducer from './feedbackFormSlice';
import socialsReducer from './socialsSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		education: educationReducer,
		projects: projectsReducer,
		feedbackForm: feedbackFormReducer,
		socials: socialsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
