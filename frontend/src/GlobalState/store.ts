import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import educationReducer from './educationSlice';
import projectsReducer from './projectsSlice';
import feedbackFormReducer from './feedbackFormSlice';
import socialsReducer from './socialsSlice';
import elementPositionsReducer from './elementPositionsSlice';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		education: educationReducer,
		projects: projectsReducer,
		feedbackForm: feedbackFormReducer,
		socials: socialsReducer,
		elementPositions: elementPositionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
