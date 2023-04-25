import {type ContactType} from '../../GlobalState/types';

export default function Contacts({content}: {content: ContactType}) {
	return (
		<div className='about-me--info--text--contacts'>
			<div className='about-me--info--text--contacts--item'>{`${content.first_name} ${content.last_name}`}</div>
			<div className='about-me--info--text--contacts--item'>{content.birthdate}</div>
			<div className='about-me--info--text--contacts--item'>{content.city}</div>
			<div className='about-me--info--text--contacts--item'>{content.email}</div>
			<div className='about-me--info--text--contacts--item'>{content.phone}</div>
			<div className='about-me--info--text--contacts--item'>{content.position}</div>
		</div>
	);
}
