import {useState} from 'react';

type Project = {
	title: string;
	link: string;
	background: string;
	tools: Array<{
		id: number;
		name: string;
		img: string;
	}>;
};

type Style = {
	stackContainer: string[];
	projectLink: string[];
	opacity: string[];
	projectTitle: string[];
};

export default function ProjectItem({title, link, background, tools}: Project) {
	const initialStyle = {
		stackContainer: ['pet-project--stack-container'],
		projectLink: ['pet-project--link'],
		opacity: ['opacity'],
		projectTitle: ['pet-project--title'],
	};

	const img = {
		backgroundImage: 'url(' + background + ')',
	};

	const [style, setStyle] = useState<Style>(initialStyle);

	const focus = () => {
		setStyle({
			stackContainer: [...style.stackContainer, 'focus'],
			projectLink: [...style.projectLink, 'show-link'],
			opacity: [...style.opacity, 'opacity-active'],
			projectTitle: [...style.projectTitle, 'pet-project--title--active'],
		});
	};

	const blur = () => {
		setStyle(initialStyle);
	};

	return (
		<div className={'pet-project chaos-organizer'} onMouseEnter={focus} onMouseLeave={blur} style={img}>
			<div className={style.opacity.join(' ')}></div>
			<div className={style.projectTitle.join(' ')}>{title}</div>
			<a className={style.projectLink.join(' ')} href={link} target='_blank' rel='noreferrer'></a>
			<div className={style.stackContainer.join(' ')}>
				{tools.map(tool =>
					<img
						className='pet-project--stack-item'
						src={tool.img}
						key={tool.id}
						alt={tool.name} />)}
			</div>
		</div>
	);
}
