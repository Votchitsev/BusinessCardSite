type AboutContent = {
	name: string;
	birth: string;
	city: string;
	email: string;
	phone: string;
	currentJob: string;
};

export default function Contacts({content}: {content: AboutContent}) {
	return (
		<div className='about-me--info--text--contacts'>
			<div className='about-me--info--text--contacts--item'>{content.name}</div>
			<div className='about-me--info--text--contacts--item'>{content.birth}</div>
			<div className='about-me--info--text--contacts--item'>{content.city}</div>
			<div className='about-me--info--text--contacts--item'>{content.email}</div>
			<div className='about-me--info--text--contacts--item'>{content.phone}</div>
			<div className='about-me--info--text--contacts--item'>{content.currentJob}</div>
		</div>
	);
}
