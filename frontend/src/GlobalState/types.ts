export type LanguageState = {
	lang: 'ru' | 'en';
	content: Content;
};

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
		placeholders: {
			name: string;
			email: string;
			message: string;
		};
	};
};
