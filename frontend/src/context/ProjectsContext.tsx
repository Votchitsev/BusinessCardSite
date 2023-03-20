import {createContext, useEffect, type ReactNode, useState} from 'react';
import {getProjects} from '../api/requests';

export type Project = {
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

type Context = {
	projects: Project[];
};

export const ProjectsContext = createContext<Context>({
	projects: [],
});

export const ProjectsState = ({children}: {children: ReactNode}) => {
	const [projects, setProjects] = useState<Context>({
		projects: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getProjects();
				setProjects({
					projects: response.data as Project[],
				});
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
