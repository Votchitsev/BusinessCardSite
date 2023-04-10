import {useContext, useEffect} from 'react';
import './Education.css';
import EducationContainer from './EducationContainer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEducation} from '../../GlobalState/educationSlice';
import {type RootState} from '../../GlobalState/store';
import {type EducationType, type Content} from '../../GlobalState/types';

export default function Education() {
	const dispatch = useDispatch();

	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const lang = useSelector<RootState>(
		state => state.language.lang,
	) as string;

	const eduContent = useSelector<RootState>(
		state => state.education.education,
	) as EducationType;

	useEffect(() => {
		dispatch<any>(fetchEducation(lang));
	}, [dispatch, lang, content]);

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
