import React, {useEffect, useState} from 'react';
import tickerEngine from './tickerEngine';

export function Ticker() {
	const [text, setText] = useState('');

	useEffect(() => {
		tickerEngine(setText);
	}, []);

	return (
		<div className='banner-content--dynamic-text-container'>
			<div className='banner-content-text'>{ text }</div>
			<div className='banner-content-cursor'></div>
		</div>
	);
}
