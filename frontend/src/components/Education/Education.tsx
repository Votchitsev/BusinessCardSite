import {useContext, useEffect} from 'react';
import {LangContext} from '../../context/LangContext';
import './Education.css';
import EducationContainer from './EducationContainer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEducation} from '../../GlobalState/educationSlice';
import {type RootState} from '../../GlobalState/store';
import {type EducationType} from '../../GlobalState/types';

export default function Education() {
	const {content} = useContext(LangContext);
	const dispatch = useDispatch();

	const lang = useSelector<RootState>(
		state => state.language.lang,
	) as string;

	const eduContent = useSelector<RootState>(
		state => state.education.education,
	) as EducationType;

	useEffect(() => {
		dispatch<any>(fetchEducation(lang));
		console.log(eduContent);
	}, [dispatch]);

	return (
		eduContent
			? <section className='education'>
				<h2 className='section-title'>{content.education.title}</h2>
				<div className='section-title--underline-container'>
					<div className='section-title--underline'></div>
				</div>
				<EducationContainer content={eduContent} />
			</section>
			: null
	);
}
