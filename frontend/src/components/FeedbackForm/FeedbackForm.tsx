import {LangContext} from '../../context/LangContext';
import {useContext, useState} from 'react';
import {postFeedbackMessage} from '../../api/requests';
import PopUp from './PopUp';
import './FeedbackForm.css';

export default function FeedbackForm() {
	const {content} = useContext(LangContext);
	const [popUpContent, setPopUpContent] = useState('');
	const [popUpActive, setPopUpActive] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');

	const onSubmitHandler = async (e: {preventDefault: () => void}) => {
		e.preventDefault();

		const data = {
			name,
			email,
			text,
		};

		try {
			await postFeedbackMessage(data);
			setPopUpContent('Сообщение отправлено');
			setPopUpActive(true);

			setName('');
			setEmail('');
			setText('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className='contact'>
			<div className='contact-wrapper'>
				<form className='contact-form' onSubmit={onSubmitHandler}>
					<h1 className='contact-form--title'>{content.feedbackForm.title}</h1>
					<div className='contact-form--title--underline-container'>
						<div className='contact-form--title--underline'></div>
					</div>
					<input
						className='contact-input'
						type='text'
						placeholder={content.feedbackForm.placeholders.name}
						value={name}
						onChange={ e => {
							setName(e.target.value);
						}}/>
					<input
						className='contact-input'
						type='e-mail'
						placeholder={content.feedbackForm.placeholders.email}
						value={email}
						onChange={ e => {
							setEmail(e.target.value);
						}}/>
					<textarea
						className='contact-input'
						placeholder={content.feedbackForm.placeholders.message}
						value={text}
						onChange={ e => {
							setText(e.target.value);
						}} />
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
			{
				popUpActive
					? <PopUp
						content={popUpContent}
						setActive={setPopUpActive}
					/>
					: null
			}
		</section>
	);
}
