export default {
	header: [
		'Home',
		'About me',
		'Education',
		'Projects',
		'Contact',
	],
	aboutMe: {
		title: 'About me',
		text: 'text about me',
		contacts: {
			name: 'Dmitrii Votchitsev',
			birth: '28 October 1988',
			city: 'Kaliningrad, Russia',
			email: 'dmitry.votchitsev@gmail.com',
			phone: '+7 (906) 233-75-99',
			currentJob: 'Freelancer',
		},
		btn1: 'view work',
		btn2: 'hire me',
		skills: [
			'Python', 'JavaScript', 'SQL', 'Django', 'Django REST', 'TypeScript', 'React',
		],
	},
	education: {
		title: 'Education',
		educationItems: [
			{
				title: 'Limited Liability Company «Netology»',
				logo: '',
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
	projects: {
		title: 'Projects',
	},
	feedbackForm: {
		title: 'Get In Touch',
		placeholders: {
			name: 'Name*:',
			email: 'E-mail*:',
			message: 'Message*:',
		},
		sendButton: 'Send',
		socials: {
			phone: 'Phone',
			address: 'Address',
			email: 'Email',
		},
		sendMessage: 'Message sent',
	},
};
