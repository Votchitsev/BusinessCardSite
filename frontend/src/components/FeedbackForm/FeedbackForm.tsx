import {useState} from 'react';
import PopUp from './PopUp';
import './FeedbackForm.css';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type Content} from '../../GlobalState/types';
import {postFeedback} from '../../GlobalState/feedbackFormSlice';

export default function FeedbackForm() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const dispatch = useDispatch();
	const isLoaded = useSelector<RootState>(
		state => state.feedbackForm.isLoaded,
	);

	const [popUpContent, setPopUpContent] = useState('');

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
			postFeedback(data);
			setPopUpContent('Сообщение отправлено');

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
					<input type='submit' value={content.feedbackForm.sendButton} />
				</form>
				<div className='contact-plate'>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon phone'></div>
						<div className='contact-plate--item--title'>{content.feedbackForm.socials.phone}:</div>
						<div className='contact-plate--item--content'>{content.aboutMe.contacts.phone}</div>
					</div>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon location'></div>
						<div className='contact-plate--item--title'>{content.feedbackForm.socials.address}:</div>
						<div className='contact-plate--item--content'>{content.aboutMe.contacts.city}</div>
					</div>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon email'></div>
						<div className='contact-plate--item--title'>{content.feedbackForm.socials.email}:</div>
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
				isLoaded
					? <PopUp
						content={popUpContent}
					/>
					: null
			}
		</section>
	);
}
