import {useContext, useEffect, useState} from 'react';
import {LangContext} from '../../context/LangContext';
import {getProjects} from '../../api/requests';
import ProjectsList from './ProjectsList';
import './Projects.css';

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

export default function Projects() {
	const {content} = useContext(LangContext);
	const [projects, setProjects] = useState<ProjectsType>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getProjects();
			setProjects(response.data as ProjectsType);
		};

		void fetchData();
	}, [content]);

	return (
		<section className='pet-projects'>
			<h2 className='section-title'>{content.projects.title}</h2>
			<div className='section-title--underline-container'>
				<div className='section-title--underline'></div>
			</div>
			{projects && <ProjectsList projects={projects} />}
		</section>
	);
}
