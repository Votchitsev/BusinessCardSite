import './Header.css';

export default function Header() {
	return (
		<section className='header'>
			<div className='header-container'>
				<div className='header-logo'>D.Votchitsev</div>
				<a className='header-menu-toggle'></a>
				<ul className='header-menu-container header-menu-container--hidden'>
					<li className='header-menu-item header-menu-item--home header-menu-item--active'>Home</li>
					<li className='header-menu-item header-menu-item--about'>About</li>
					<li className='header-menu-item header-menu-item--education'>Education</li>
					<li className='header-menu-item header-menu-item--pet-projects'>Pet-projects</li>
					<li className='header-menu-item header-menu-item--contact'>Contact</li>
				</ul>
			</div>
		</section>
	);
}
