export default {
	header: [
		'Главная',
		'Обо мне',
		'Образование',
		'Проекты',
		'Контакты',
	],
	aboutMe: {
		title: 'Обо мне',
		text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,',
		contacts: {
			name: 'Дмитрий Вотчицев',
			birth: '28 октября 1988 года',
			city: 'Калининград',
			email: 'dmitry.votchitsev@gmail.com',
			phone: '+7 (906) 233-75-99',
			currentJob: 'Фрилансер',
		},
		btn1: 'Мои работы',
		btn2: 'Контакты',
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
		sendButton: 'Отправить',
		socials: {
			phone: 'Телефон',
			address: 'Адрес',
			email: 'Email',
		},
		sendMessage: 'Сообщение отправлено',
	},
};
