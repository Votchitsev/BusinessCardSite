import {useState, useEffect} from 'react';

export default function useScrollPosition() {
	const [top, setTop] = useState(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			setTop(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return top;
}
