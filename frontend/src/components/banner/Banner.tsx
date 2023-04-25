import React from 'react';
import {Ticker} from './Ticker';
import './Banner.css';

export function Banner() {
	return (
		<section id='0' className='banner'>
			<div className='banner-content-container'>
				<div className='banner-content--static-text'>
					<div className='banner-content--static-text--hello'>Hello,</div>
					<div className='banner-content--static-text--name'>i am dmitry votchitsev</div>
				</div>
				<Ticker />
			</div>
		</section>
	);
}
