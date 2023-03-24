import {useContext, useEffect, useState} from 'react';
import {LangContext} from '../../context/LangContext';
import {getEducation} from '../../api/requests';
import './Education.css';
import EducationContainer from './EducationContainer';

type Data = Array<{
	id: number;
	name: string;
	logo: string;
	period: string;
	skills: Array<{
		id: number;
		name: string;
	}>;
}>;

export default function Education() {
	const {content, lang} = useContext(LangContext);
	const [eduContent, setContent] = useState<Data>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getEducation(lang);
			setContent(response.data as Data);
		};

		void fetchData();
	}, [content]);

	return (
		<section className='education'>
			<h2 className='section-title'>{content.education.title}</h2>
			<div className='section-title--underline-container'>
				<div className='section-title--underline'></div>
			</div>
			<EducationContainer content={eduContent} />
		</section>
	);
}
