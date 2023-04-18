import {useEffect, useState, useRef} from 'react';
import PopUp from './PopUp';
import './FeedbackForm.css';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type SocialsType, type Content, type ProjectsType} from '../../GlobalState/types';
import {postFeedback} from '../../GlobalState/feedbackFormSlice';
import {fetchSocials} from '../../GlobalState/socialsSlice';
import {initElementPosition} from '../../GlobalState/elementPositionsSlice';

export default function FeedbackForm() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const socials = useSelector<RootState>(
		state => state.socials.socials,
	) as SocialsType;

	const projects = useSelector<RootState>(
		state => state.projects.projects,
	) as ProjectsType;

	const dispatch = useDispatch();

	const isLoaded = useSelector<RootState>(
		state => state.feedbackForm.isLoaded,
	);

	const isError = useSelector<RootState>(
		state => state.feedbackForm.isError,
	);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');

	const positionRef = useRef<HTMLElement>(null);

	const onSubmitHandler = async (e: {preventDefault: () => void}) => {
		e.preventDefault();

		const data = {
			name,
			email,
			text,
		};

		dispatch<any>(
			postFeedback(data),
		);

		setName('');
		setEmail('');
		setText('');
	};

	useEffect(() => {
		dispatch<any>(
			fetchSocials(),
		);
	}, []);

	useEffect(() => {
		dispatch<any>(
			initElementPosition({
				index: 4,
				offsetTop: positionRef.current
					? positionRef.current.getBoundingClientRect().y - 150
					: 0,
			}),
		);
	}, [socials, projects]);

	return (
		<section className='contact' id='4' ref={positionRef}>
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
						<div
							className='contact-plate--item--title'
						>
							{content.feedbackForm.socials.phone}:
						</div>
						<div
							className='contact-plate--item--content'
						>
							{content.aboutMe.contacts.phone}
						</div>
					</div>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon location'></div>
						<div
							className='contact-plate--item--title'
						>
							{content.feedbackForm.socials.address}:
						</div>
						<div
							className='contact-plate--item--content'
						>
							{content.aboutMe.contacts.city}
						</div>
					</div>
					<div className='contact-plate--item'>
						<div className='contact-plate--item--icon email'></div>
						<div
							className='contact-plate--item--title'
						>
							{content.feedbackForm.socials.email}:
						</div>
						<div
							className='contact-plate--item--content'
						>
							{content.aboutMe.contacts.email}
						</div>
					</div>
					<div className='contact-plate--socials'>
						{
							socials?.map(
								social =>
									<a
										key={social.id}
										href={social.link}
										className='contact-plate--socials-item'
										style={{
											backgroundImage: `url(${social.logo})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'center',
										}}
									>
									</a>,
							)
						}
					</div>
				</div>
			</div>
			{
				isLoaded
					? <PopUp />
					: null
			}
			{
				isError
					? <h1>{isError as string}</h1>
					: null
			}
		</section>
	);
}
