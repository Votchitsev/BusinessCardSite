export default {
	aboutMe: {
		title: 'Обо мне',
		text: 'Здесь будет текст обо мне.',
		contacts: {
			name: 'Дмитрий Вотчицев',
			birth: '28 октября 1988 года',
			city: 'Калининград',
			email: 'dmitry.votchitsev@gmail.com',
			phone: '+7 (906) 233-75-99',
			currentJob: 'Фрилансер',
		},
		btn1: 'Мои работы',
		btn2: 'Связаться со мной',
		skills: [
			'Python', 'JavaScript', 'SQL', 'Django', 'Django REST', 'TypeScript', 'React',
		],
	},
	education: {
		title: 'Образование',
		educationItems: [
			{
				title: 'ООО Нетология-Групп',
				logo: '',
				date: '2021-2022',
				educationSkills: [
					'Вёрстка сайтов с использованием HTML и CSS',
					'Фронтенд разработка на JavaScript',
					'Работа с системой контроля версий Git и GitHub',
					'Решение различных задач на Python',
					'Разработка сайтов на Django',
					'',
					'Работа с базами данных с использованием SQLAlchemy и PostgreSQl',
					'Взаимодействие со сторонними сервисами при помощи API',
					'Unit-тестирование с использованием PyTest и Jest',
				],
			},
		],
	},
	projects: {
		title: 'Проекты',
	},
	feedbackForm: {
		title: 'Связаться со мной',
		placeholders: {
			name: 'Имя*:',
			email: 'E-mail*:',
			message: 'Сообщение*:',
		},
	},
};
