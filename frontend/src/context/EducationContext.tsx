import {createContext, useEffect, useState, type ReactNode} from 'react';

type Education = {
	id: number;
	name: string;
	logo: string;
	skills: Array<{
		id: number;
		name: string;
	}>;
};

type Context = {
	educations: Education[];
};

export const EducationContext = createContext<Context>({
	educations: [],
});

export const EducationState = ({children}: {children: ReactNode}) => {
	const [educations, setEducations] = useState<Context>({
		educations: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await 
			}
		}
	})
}
