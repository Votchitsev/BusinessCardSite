import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setIsLoaded} from '../../GlobalState/feedbackFormSlice';

export default function PopUp(
	{
		content,
	}: {
		content: string;
	},
) {
	const [opacity, setOpacity] = useState(0.8);

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
			{content}
		</div>
	);
}
