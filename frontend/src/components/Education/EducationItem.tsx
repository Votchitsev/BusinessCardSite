type Prop = {
	content: {
		id: number;
		name: string;
		logo: string;
		period: string;
		skills: Array<{
			id: number;
			name: string;
		}>;
	};
};

export default function EducationItem({content}: Prop) {
	const style = {
		backgroundImage: `url(${content.logo})`,
	};

	return (
		<div className='education-item'>
			<div className='education-item--title'>
				<div className='education-item--title--logo' style={style}></div>
				<div className='education-item--title--content'>{content.name}</div>
				<div className='education-item--date'>{content.period}</div>
			</div>
			<ul className='education-item--list'>
				{ content.skills.map((item, index) => <li className='education-item--list--item' key={index}>{item.name}</li>)}
			</ul>
		</div>
	);
}
