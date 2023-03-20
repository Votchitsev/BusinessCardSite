import {type Project} from '../../context/ProjectsContext';
import ProjectItem from './ProjectItem';

export default function ProjectsList({projects}: {projects: Project[]}) {
	return (
		<div className='pet-projects--container'>
			{projects.map(project =>
				<ProjectItem
					key={project.id}
					title={project.title}
					link={project.link}
					background={project.background}
					tools={project.tools}
				/>)}
		</div>
	);
}
