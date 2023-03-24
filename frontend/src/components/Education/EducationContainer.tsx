import EducationItem from './EducationItem';

type Prop = {
	content: Array<{
		id: number;
		name: string;
		logo: string;
		period: string;
		skills: Array<{
			id: number;
			name: string;
		}>;
	}>;
};

export default function EducationContainer({content}: Prop) {
	return (
		<div className='education-container'>
			{ content.map((item, index) => <EducationItem content={item} key={index} />)}
		</div>
	);
}
