import logo from '../components/Education/color_big.svg';

const l: unknown = logo;

export default {
	aboutMe: {
		title: '',
		text: '',
		contacts: {
			name: 'Dmitrii Votchitsev',
			birth: '28 October 1988',
			city: 'Kaliningrad, Russia',
			email: 'dmitry.votchitsev@gmail.com',
			phone: '+7 (906) 233-75-99',
			currentJob: 'Freelancer',
		},
		btn1: '',
		btn2: '',
		skills: [
			'',
		],
	},
	education: {
		title: 'Education',
		educationItems: [
			{
				title: 'Limited Liability Company «Netology»',
				logo: l,
				date: '2021-2022',
				educationSkills: [
					'Website layout by HTML and CSS',
					'Frontend-development by JavaScript',
					'Working with version control system Git and GitHub',
					'Solve different tasks by Python',
					'Website development with Django',
					'Client server interaction',
					'Working with databases by SQLAlchemy and PostgreSQL',
					'Working with another services API',
					'Unit-testing by PyTest and Jest',
				],
			},
		],
	},
};
