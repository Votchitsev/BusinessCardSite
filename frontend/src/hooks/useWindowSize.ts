import {useEffect, useState} from 'react';

export default function useWindowSize() {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	const resizeHandler = () => {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
	}, []);

	return {
		height,
		width,
	};
}
