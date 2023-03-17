import {createContext, type ReactNode, useState, useEffect} from 'react';
import ru from '../lang/ru';
import en from '../lang/en';

type Content = {
	aboutMe: {
		name: string;
		birth: string;
		city: string;
		email: string;
		phone: string;
		currentJob: string;
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
