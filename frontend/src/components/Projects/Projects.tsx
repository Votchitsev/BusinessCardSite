import {useContext, useEffect, useState} from 'react';
import {LangContext} from '../../context/LangContext';
import {ProjectsContext, ProjectsState} from '../../context/ProjectsContext';
import ProjectsList from './ProjectsList';
import './Projects.css';

export default function Projects() {
	const {content} = useContext(LangContext);
	const {projects} = useContext(ProjectsContext);

	useEffect(() => {
		console.log(projects);
	}, [projects]);

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
