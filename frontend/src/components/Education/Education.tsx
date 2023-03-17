import {useContext} from 'react';
import {LangContext} from '../../context/LangContext';
import './Education.css';
import EducationContainer from './EducationContainer';

export default function Education() {
	const {content} = useContext(LangContext);

	return (
		<section className='education'>
			<h2 className='section-title'>{content.education.title}</h2>
			<div className='section-title--underline-container'>
				<div className='section-title--underline'></div>
			</div>
			<EducationContainer content={content.education} />
		</section>
	);
}
