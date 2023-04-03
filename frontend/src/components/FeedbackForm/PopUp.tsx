import {useEffect, useState} from 'react';

export default function PopUp(
	{
		content,
		setActive,
	}: {
		content: string;
		setActive: (state: boolean) => void;
	},
) {
	const [opacity, setOpacity] = useState(0.8);

	const disappear = () => {
		let intervalOpacity = 0.8;

		const interval = setInterval(() => {
			if (intervalOpacity < 0) {
				setActive(false);
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
