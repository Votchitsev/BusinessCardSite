import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoaded} from '../../GlobalState/feedbackFormSlice';
import {type RootState} from '../../GlobalState/store';

export default function PopUp() {
	const [opacity, setOpacity] = useState(0.8);
	const message = useSelector<RootState>(
		state => state.language.content.feedbackForm.sendMessage,
	) as string;

	const dispatch = useDispatch();

	const disappear = () => {
		let intervalOpacity = 0.8;

		const interval = setInterval(() => {
			if (intervalOpacity < 0) {
				dispatch(setIsLoaded(false));
				clearInterval(interval);
			}

			intervalOpacity -= 0.01;

			setOpacity(prev => prev - 0.01);
		}, 20);
	};

	useEffect(() => {
		disappear();
	}, []);

	return (
		<div className='disappear-pop-up' style={{opacity}}>
			{message}
		</div>
	);
}
