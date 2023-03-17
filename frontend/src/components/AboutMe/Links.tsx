type ContentProp = {
	btn1: string;
	btn2: string;
};

export default function Links({btn1, btn2}: ContentProp) {
	return (
		<div className='about-me--info--text--links'>
			<button className='about-me--view-work-btn'>{btn1}</button>
			<button className='about-me--hire-btn'>{btn2}</button>
		</div>
	);
}
