import {type ProjectsType} from '../../GlobalState/types';
import ProjectItem from './ProjectItem';

export default function ProjectsList({projects}: {projects: ProjectsType}) {
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
