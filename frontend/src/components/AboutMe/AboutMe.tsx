import {useContext} from 'react';
import {LangContext} from '../../context/LangContext';
import './AboutMe.css';
import Contacts from './Contacts';
import portrait from './img/dmitrii.votchitsev_2215405451567359885_0.jpg';
import Links from './Links';
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
					<Links />
				</div>
			</div>
			<div className='about-me--skills'>
				<div className='skill-container'>
					<div className='skill-title'>JavaScript</div>
					<div className='skill-line-container'>
						<div className='skill-line'>
							<div className='skill-line--value'>36%</div>
						</div>
					</div>
				</div>
				<div className='skill-container'>
					<div className='skill-title'>HTML</div>
					<div className='skill-line-container'>
						<div className='skill-line'>
							<div className='skill-line--value'>31%</div>
						</div>
					</div>
				</div>
				<div className='skill-container'>
					<div className='skill-title'>Python</div>
					<div className='skill-line-container'>
						<div className='skill-line'>
							<div className='skill-line--value'>23%</div>
						</div>
					</div>
				</div>
				<div className='skill-container'>
					<div className='skill-title'>CSS</div>
					<div className='skill-line-container'>
						<div className='skill-line'>
							<div className='skill-line--value'>9%</div>
						</div>
					</div>
				</div>
				<div className='skill-container'>
					<div className='skill-title'>TypeScript</div>
					<div className='skill-line-container'>
						<div className='skill-line'>
							<div className='skill-line--value'>1%</div>
						</div>
					</div>
				</div>
				<div className='skill-container'>
					<div className='skill-title'>Other</div>
					<div className='skill-line-container'>
						<div className='skill-line'>
							<div className='skill-line--value'>1%</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
