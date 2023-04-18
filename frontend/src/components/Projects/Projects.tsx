import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProjectsList from './ProjectsList';
import {fetchProjectsData} from '../../GlobalState/projectsSlice';
import {initElementPosition} from '../../GlobalState/elementPositionsSlice';
import useWindowSize from '../../hooks/useWindowSize';
import {setError} from '../../GlobalState/errorSlice';
import {type RootState} from '../../GlobalState/store';
import {type Content, type ProjectsType, type EducationType} from '../../GlobalState/types';
import './Projects.css';

export default function Projects() {
	const dispatch = useDispatch();

	const windowSize = useWindowSize();

	const error = useSelector<RootState>(
		state => state.projects.isError,
	);

	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const projects = useSelector<RootState>(
		state => state.projects.projects,
	) as ProjectsType;

	const eduContent = useSelector<RootState>(
		state => state.education.education,
	) as EducationType;

	const positionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		dispatch<any>(fetchProjectsData());
	}, [dispatch, content]);

	useEffect(() => {
		dispatch<any>(
			initElementPosition({
				index: 3,
				offsetTop: positionRef.current
					? positionRef.current.getBoundingClientRect().y + window.scrollY - 150
					: 0,
			}),
		);
	}, [projects, eduContent, windowSize]);

	useEffect(() => {
		if (error) {
			dispatch<any>(
				setError(error),
			);
		}
	}, [error]);

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
