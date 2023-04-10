import {useEffect} from 'react';
import ProjectsList from './ProjectsList';
import './Projects.css';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type Content, type ProjectsType} from '../../GlobalState/types';
import {fetchProjectsData} from '../../GlobalState/projectsSlice';

export default function Projects() {
	const dispatch = useDispatch();

	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const projects = useSelector<RootState>(
		state => state.projects.projects,
	) as ProjectsType;

	useEffect(() => {
		dispatch<any>(fetchProjectsData());
	}, [dispatch, content]);

	return (
		<section className='pet-projects'>
			<h2
				className='section-title'
			>
				{content.projects.title}
			</h2>
			<div className='section-title--underline-container'>
				<div className='section-title--underline'></div>
			</div>
			{projects && <ProjectsList projects={projects} />}
		</section>
	);
}
