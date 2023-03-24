import {LangContext} from '../../context/LangContext';
import {useContext} from 'react';
import './FeedbackForm.css';

export default function FeedbackForm() {
	const {content} = useContext(LangContext);

	return (
		<section className='contact'>
			<div className='contact-wrapper'>
				<form className='contact-form'>
					<h1 className='contact-form--title'>{content.feedbackForm.title}</h1>
					<div className='contact-form--title--underline-container'>
						<div className='contact-form--title--underline'></div>
					</div>
					<input className='contact-input' type='text' placeholder='Name*:' />
					<input className='contact-input' type='e-mail' placeholder='E-mail*:' />
					<textarea className='contact-input' placeholder='Message*:'></textarea>
					<input type='submit' value='SEND' />
				</form>
				<div className='contact-plate'>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon phone'></div>
						<div className='contact-plate--item--title'>Phone:</div>
						<div className='contact-plate--item--content'>{content.aboutMe.contacts.phone}</div>
					</div>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon location'></div>
						<div className='contact-plate--item--title'>Address:</div>
						<div className='contact-plate--item--content'>{content.aboutMe.contacts.city}</div>
					</div>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon email'></div>
						<div className='contact-plate--item--title'>Email</div>
						<div className='contact-plate--item--content'>{content.aboutMe.contacts.email}</div>
					</div>
					<div className='contact-plate--socials'>
						<a href='#' className='contact-plate--socials-item facebook'></a>
						<a href='#' className='contact-plate--socials-item instagram'></a>
						<a href='#' className='contact-plate--socials-item github'></a>
					</div>
				</div>
			</div>
		</section>
	);
}
