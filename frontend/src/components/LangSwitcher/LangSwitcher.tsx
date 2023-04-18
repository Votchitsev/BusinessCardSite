import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../../GlobalState/languageSlice';
import {type RootState} from '../../GlobalState/store';
import './LangSwitcher.css';

export default function LangSwitcher() {
	const dispatch = useDispatch();
	const lang = useSelector<RootState>(state => state.language.lang) as string;

	const onClickHandler = (language: 'ru' | 'en') => {
		dispatch(
			changeLanguage(language),
		);
	};

	return (
		<div className='language-button'>
			<div
				className={`switcher left ${lang === 'ru' ? 'active' : ''}`}
				onClick={() => {
					onClickHandler('ru');
				}}
			>ru</div>
			<div
				className={`switcher right ${lang === 'en' ? 'active' : ''}`}
				onClick={() => {
					onClickHandler('en');
				}}
			>en</div>
		</div>
	);
}
