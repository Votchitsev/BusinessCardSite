import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../../GlobalState/languageSlice';
import {type RootState} from '../../GlobalState/store';

export default function LangSwitcher() {
	const dispatch = useDispatch();
	const lang = useSelector<RootState>(state => state.language.lang) as string;

	const onClickHandler = () => {
		dispatch(
			changeLanguage(),
		);
	};

	return (
		<button
			onClick={onClickHandler}
			style={{
				position: 'fixed',
				zIndex: 2,
				bottom: '30px',
				right: '30px',
			}}
		>
			{ lang }
		</button>
	);
}
