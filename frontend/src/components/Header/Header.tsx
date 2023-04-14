import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {HashLink} from 'react-router-hash-link';
import {type RootState} from '../../GlobalState/store';
import {type Content} from '../../GlobalState/types';
import useScrollPosition from '../../hooks/useScrollPosition';
import useActiveItem from '../../hooks/useActiveItem';
import './Header.css';

export default function Header() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const activeElement = useActiveItem();
	console.log(activeElement);

	const [fixHeader, setFixHeader] = useState(false);
	const [activeDropDownMenu, setActiveDropDownMenu] = useState(false);

	const position = useScrollPosition();

	useEffect(() => {
		if (position > 220) {
			setFixHeader(true);
			return;
		}

		setFixHeader(false);
	}, [position]);

	const toggleOnClickHandler = () => {
		setActiveDropDownMenu(!activeDropDownMenu);
	};

	return (
		<section
			className={`header ${fixHeader ? 'header-fixed' : ''}`}
		>
			<div className='header-container'>
				<div className='header-logo'>D.Votchitsev</div>
				<a
					className={`header-menu-toggle ${fixHeader ? 'toggle-black' : ''}`}
					onClick={toggleOnClickHandler}
				></a>
				<ul className={
					`header-menu-container
					${activeDropDownMenu ? '' : 'header-menu-container--hidden'}`
				}>
					{
						content.header.map(
							(item, index) =>
								<HashLink
									smooth
									to={`#${index}`}
									key={index}
									className={
										`header-menu-item header-menu-item
									${index === activeElement ? 'header-menu-item--active' : ''}`
									}
								>
									{item}
								</HashLink>,
						)
					}
				</ul>
			</div>
		</section>
	);
}
