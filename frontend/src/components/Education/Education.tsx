import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EducationContainer from './EducationContainer';
import {fetchEducation} from '../../GlobalState/educationSlice';
import {initElementPosition} from '../../GlobalState/elementPositionsSlice';
import useWindowSize from '../../hooks/useWindowSize';
import {setError} from '../../GlobalState/errorSlice';
import {type RootState} from '../../GlobalState/store';
import {type EducationType, type Content} from '../../GlobalState/types';
import './Education.css';

export default function Education() {
	const dispatch = useDispatch();
	const windowSize = useWindowSize();
	const positionRef = useRef<HTMLElement>(null);

	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const lang = useSelector<RootState>(
		state => state.language.lang,
	) as string;

	const eduContent = useSelector<RootState>(
		state => state.education.education,
	) as EducationType;

	const error = useSelector<RootState>(
		state => state.education.isError,
	);

	useEffect(() => {
		dispatch<any>(fetchEducation(lang));
	}, [dispatch, lang, content]);

	useEffect(() => {
		dispatch<any>(
			initElementPosition({
				index: 2,
				offsetTop: positionRef.current
					? positionRef.current.getBoundingClientRect().y + window.scrollY - 150
					: 0,
			}),
		);
	}, [eduContent, positionRef, windowSize]);

	useEffect(() => {
		if (error) {
			dispatch<any>(setError(error));
		}
	}, [error]);

	return (
		eduContent
			? <section id='2' className='education' ref={positionRef}>
				<h2 className='section-title'>{content.education.title}</h2>
				<div className='section-title--underline-container'>
					<div className='section-title--underline'></div>
				</div>
				<EducationContainer content={eduContent} />
			</section>
			: null
	);
}
