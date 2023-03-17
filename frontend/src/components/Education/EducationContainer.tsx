import EducationItem from './EducationItem';

type Content = {
	title: string;
	educationItems: Array<{
		title: string;
		logo: string;
		date: string;
		educationSkills: string[];
	}>;
};

export default function EducationContainer({content}: {content: Content}) {
	return (
		<div className='education-container'>
			{ content.educationItems.map((item, index) => <EducationItem content={item} key={index} />)}
		</div>
	);
}
