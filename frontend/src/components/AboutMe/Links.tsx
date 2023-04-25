import {useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type ElementPositionsType} from '../../GlobalState/types';

type ContentProp = {
	btn1: string;
	btn2: string;
};

export default function Links({btn1, btn2}: ContentProp) {
	const elementPositions = useSelector<RootState>(
		state => state.elementPositions.elementPositions,
	) as ElementPositionsType;

	const onClickHandler = (index: number) => {
		const targetElement = elementPositions.find(
			element => element.index === index,
		);

		if (!targetElement) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

			return;
		}

		window.scrollTo({
			top: targetElement.offsetTop + 1,
			behavior: 'smooth',
		});
	};

	return (
		<div className='about-me--info--text--links'>
			<button
				className='about-me--view-work-btn'
				onClick={() => {
					onClickHandler(3);
				}}
			>
				{btn1}
			</button>
			<button
				className='about-me--hire-btn'
				onClick={() => {
					onClickHandler(4);
				}}
			>
				{btn2}
			</button>
		</div>
	);
}
