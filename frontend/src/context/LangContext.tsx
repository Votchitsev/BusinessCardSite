import {createContext, type ReactNode, useState, useEffect} from 'react';
import ru from '../lang/ru';
import en from '../lang/en';

export type Content = {
	aboutMe: {
		title: string;
		text: string;
		contacts: {
			name: string;
			birth: string;
			city: string;
			email: string;
			phone: string;
			currentJob: string;
		};
		btn1: string;
		btn2: string;
		skills: string[];
	};
	education: {
		title: string;
		educationItems: Array<{
			title: string;
			logo: string;
			date: string;
			educationSkills: string[];
		}>;
	};
	projects: {
		title: string;
	};
	feedbackForm: {
		title: string;
	};
};

type Lang = {
	lang: 'ru' | 'en';
	content: Content;
	set: () => void;
};

export const LangContext = createContext<Lang>({
	lang: 'ru',
	set: () => undefined,
	content: ru,
});

export const LangState = ({children}: {children: ReactNode}) => {
	const [lang, setLang] = useState<'ru' | 'en'>('ru');
	const [content, setContent] = useState(ru);

	const set = () => {
		if (lang === 'ru') {
			setLang('en');
			return;
		}

		setLang('ru');
	};

	useEffect(() => {
		if (lang === 'ru') {
			setContent(ru);

			return;
		}

		setContent(en);
	}, [lang]);

	return (
		<LangContext.Provider value={{lang, set, content}}>
			{ children }
		</LangContext.Provider>
	);
};
