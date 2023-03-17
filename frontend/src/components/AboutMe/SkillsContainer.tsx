import Skill from './Skill';

export default function SkillsContainer({skills}: {skills: string[]}) {
	return (
		<div className='about-me--skills'>
			{skills.map((skill, index) => <Skill skill={skill} key={index} />)}
		</div>

	);
}
