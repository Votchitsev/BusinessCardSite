import {useEffect, useRef} from 'react';
import ProjectsList from './ProjectsList';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type Content, type ProjectsType} from '../../GlobalState/types';
import {fetchProjectsData} from '../../GlobalState/projectsSlice';
import {initElementPosition} from '../../GlobalState/elementPositionsSlice';
import './Projects.css';

export default function Projects() {
	const dispatch = useDispatch();

	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const projects = useSelector<RootState>(
		state => state.projects.projects,
	) as ProjectsType;

	const positionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		dispatch<any>(fetchProjectsData());
	}, [dispatch, content]);

	useEffect(() => {
		dispatch<any>(
			initElementPosition({
				index: 3,
				offsetTop: positionRef.current
					? positionRef.current.getBoundingClientRect().y
					: 0,
			}),
		);
	}, []);

	return (
		<section id='3' className='pet-projects' ref={positionRef}>
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
