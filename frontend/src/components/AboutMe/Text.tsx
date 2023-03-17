export default function Text({content, title}: {content: string; title: string}) {
	return (
		<>
			<h2 className='about-me--info--text--title'>{title}</h2><div className='about-me--info--text--title--underline-container'>
				<div className='about-me--info--text--title--underline'></div>
			</div><p className='about-me--info--text--content'>{content}</p>
		</>
	);
}
