import {useContext} from 'react';
import {LangContext} from '../../context/LangContext';
import './AboutMe.css';
import Contacts from './Contacts';
import portrait from './img/dmitrii.votchitsev_2215405451567359885_0.jpg';
import Links from './Links';
import SkillsContainer from './SkillsContainer';
import Text from './Text';

export default function AboutMe() {
	const {content} = useContext(LangContext);

	return (
		<section className='about-me'>
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
