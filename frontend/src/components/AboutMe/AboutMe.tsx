import './AboutMe.css';
import ru from '../../lang';
import portrait from './img/dmitrii.votchitsev_2215405451567359885_0.jpg';

export default function AboutMe() {
	return (
		<section className='about-me'>
			<div className='about-me--info'>
				<div className='about-me--info--photo--container'>
					<img className='about-me--info--photo' src={portrait as string} />
				</div>
				<div className='about-me--info--text'>
					<h2 className='about-me--info--text--title'>More Info About Me</h2>
					<div className='about-me--info--text--title--underline-container'>
						<div className='about-me--info--text--title--underline'></div>
					</div>
					<p className='about-me--info--text--content'></p>
					<div className='about-me--info--text--contacts'>
						<div className='about-me--info--text--contacts--item'>Dmitrii Votchitsev</div>
						<div className='about-me--info--text--contacts--item'>28 October 1988</div>
						<div className='about-me--info--text--contacts--item'>Kaliningrad, Russia</div>
						<div className='about-me--info--text--contacts--item'>dmitry.votchitsev@gmail.com</div>
						<div className='about-me--info--text--contacts--item'>+7 (906) 233-75-99</div>
						<div className='about-me--info--text--contacts--item'>Freelancer</div>
					</div>
					<div className='about-me--info--text--links'>
						<button className='about-me--view-work-btn'>view work</button>
						<button className='about-me--hire-btn'>hire me</button>
					</div>
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
