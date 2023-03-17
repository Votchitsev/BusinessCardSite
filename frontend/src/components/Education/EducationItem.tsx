type Content = {
	title: string;
	logo: string;
	date: string;
	educationSkills: string[];
};

export default function EducationItem({content}: {content: Content}) {
	const style = {
		backgroundImage: 'url(' + content.logo + ')',
	};

	return (
		<div className='education-item'>
			<div className='education-item--title'>
				<div className='education-item--title--logo' style={style}></div>
				<div className='education-item--title--content'>{content.title}</div>
				<div className='education-item--date'>{content.date}</div>
			</div>
			<ul className='education-item--list'>
				{ content.educationSkills.map((item, index) => <li className='education-item--list--item' key={index}>{item}</li>)}
			</ul>
		</div>
	);
}
