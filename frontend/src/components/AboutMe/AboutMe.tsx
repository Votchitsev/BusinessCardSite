import {useEffect, useRef} from 'react';
import './AboutMe.css';
import Contacts from './Contacts';
import portrait from './img/dmitrii.votchitsev_2215405451567359885_0.jpg';
import Links from './Links';
import SkillsContainer from './SkillsContainer';
import Text from './Text';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type Content, type ContactType} from '../../GlobalState/types';
import {initElementPosition} from '../../GlobalState/elementPositionsSlice';
import useWindowSize from '../../hooks/useWindowSize';
import {fetchContact} from '../../GlobalState/contactSlice';
import {setError} from '../../GlobalState/errorSlice';

export default function AboutMe() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const contacts = useSelector<RootState>(
		state => state.contacts.contacts,
	) as ContactType;

	const lang = useSelector<RootState>(
		state => state.language.lang,
	) as string;

	const error = useSelector<RootState>(
		state => state.contacts.isError,
	) as string;

	const windowSize = useWindowSize();
	const dispatch = useDispatch();
	const aboutMeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		dispatch<any>(
			initElementPosition({
				index: 1,
				offsetTop: aboutMeRef.current
					?	aboutMeRef.current.getBoundingClientRect().y + window.scrollY - 150
					: 0,
			}),
		);
	}, [windowSize]);

	useEffect(() => {
		dispatch<any>(
			fetchContact(lang),
		);
	}, [lang]);

	useEffect(() => {
		dispatch<any>(
			setError(error),
		);
	}, [error]);

	return (
		<section id='1' className='about-me' ref={aboutMeRef}>
			<div className='about-me--info'>
				<div className='about-me--info--photo--container'>
					<img className='about-me--info--photo' src={portrait as string} />
				</div>
				<div className='about-me--info--text'>
					<Text content={contacts.about_me} title={content.aboutMe.title} />
					<Contacts content={contacts} />
					<Links btn1={content.aboutMe.btn1} btn2={content.aboutMe.btn2} />
				</div>
			</div>
			<SkillsContainer skills={content.aboutMe.skills} />
		</section>
	);
}
