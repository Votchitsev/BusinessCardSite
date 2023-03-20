import {createContext, useEffect, type ReactNode, useState} from 'react';
import {getProjects} from '../api/requests';

type Project = {
	id: number;
	title: string;
	link: string;
	background: string;
	tools: Array<{
		id: number;
		name: string;
		img: string;
	}>;
};

export const ProjectsContext = createContext<Project[] | undefined>([]);

export const ProjectsState = ({children}: {children: ReactNode}) => {
	const [projects, setProjects] = useState<Project[] | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getProjects();
				setProjects(response.data as Project[]);
			} catch {
				throw new Error('Failed to get a list of projects');
			}
		};

		void fetchData();
	}, []);

	return (
		<ProjectsContext.Provider value={projects}>
			{children}
		</ProjectsContext.Provider>
	);
};
