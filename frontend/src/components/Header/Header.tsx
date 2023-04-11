import {useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import {type Content} from '../../GlobalState/types';
import './Header.css';

export default function Header() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	return (
		<section className='header'>
			<div className='header-container'>
				<div className='header-logo'>D.Votchitsev</div>
				<a className='header-menu-toggle'></a>
				<ul className='header-menu-container header-menu-container--hidden'>
					{
						content.header.map(
							(item, index) =>
								<li
									key={index}
									className='header-menu-item header-menu-item--about'
								>
									{item}
								</li>,
						)
					}
					{/* <li className='header-menu-item header-menu-item--home header-menu-item--active'>{}</li>
					<li className='header-menu-item header-menu-item--about'>About</li>
					<li className='header-menu-item header-menu-item--education'>Education</li>
					<li className='header-menu-item header-menu-item--pet-projects'>Pet-projects</li>
					<li className='header-menu-item header-menu-item--contact'>Contact</li> */}
				</ul>
			</div>
		</section>
	);
}
