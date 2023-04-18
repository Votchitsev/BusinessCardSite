import {useEffect, useRef} from 'react';
import './AboutMe.css';
import Contacts from './Contacts';
import portrait from './img/dmitrii.votchitsev_2215405451567359885_0.jpg';
import Links from './Links';
import SkillsContainer from './SkillsContainer';
import Text from './Text';
import {AnyIfEmpty, useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type Content} from '../../GlobalState/types';
import {initElementPosition} from '../../GlobalState/elementPositionsSlice';

export default function AboutMe() {
	const content = useSelector<RootState>(state => state.language.content) as Content;

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
	}, []);

	return (
		<section id='1' className='about-me' ref={aboutMeRef}>
			<div className='about-me--info'>
				<div className='about-me--info--photo--container'>
					<img className='about-me--info--photo' src={portrait as string} />
				</div>
				<div className='about-me--info--text'>
					<Text content={content.aboutMe.text} title={content.aboutMe.title} />
					<Contacts content={content.aboutMe.contacts} />
					<Links btn1={content.aboutMe.btn1} btn2={content.aboutMe.btn2} />
				</div>
			</div>
			<SkillsContainer skills={content.aboutMe.skills} />
		</section>
	);
}
