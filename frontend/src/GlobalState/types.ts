export type LanguageState = {
	lang: 'ru' | 'en';
	content: Content;
};

export type Content = {
	header: string[];
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
		sendButton: string;
		socials: {
			phone: string;
			address: string;
			email: string;
		};
		sendMessage: string;
	};
};

export type EducationType = Array<{
	id: number;
	name: string;
	logo: string;
	period: string;
	skills: Array<{
		id: number;
		name: string;
	}>;
}>;

export type ProjectsType = Array<{
	id: number;
	title: string;
	link: string;
	background: string;
	tools: Array<{
		id: number;
		name: string;
		img: string;
	}>;
}>;

export type FormDataType = {
	name: string;
	email: string;
	text: string;
};

export type SocialsType = Array<{
	id: number;
	name: string;
	link: string;
	logo: string;
	contact: number;
}>;

export type ElementPositionsType = Array<{
	index: number;
	offsetTop: number;
}>;

export type ContactType = {
	first_name: string;
	last_name: string;
	birthdate: string;
	city: string;
	phone: string;
	position: string;
	email: string;
	about_me: string;
};
