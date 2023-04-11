import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {type RootState} from '../../GlobalState/store';
import {type Content} from '../../GlobalState/types';
import useScrollPosition from '../../hooks/useScrollPosition';
import './Header.css';

export default function Header() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const [fixHeader, setFixHeader] = useState(false);
	const [activeItem, setActiveItem] = useState(0);
	const [activeDropDownMenu, setActiveDropDownMenu] = useState(false);

	const position = useScrollPosition();

	useEffect(() => {
		if (position > 220) {
			setFixHeader(true);
			return;
		}

		setFixHeader('');
	}, [position]);

	const onClickHandler = (index: number) => {
		setActiveItem(index);
	};

	const toggleOnClickHandler = () => {
		setActiveDropDownMenu(!activeDropDownMenu);
	};

	return (
		<section className={`header ${fixHeader ? 'header-fixed' : ''}`}>
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
								<li
									key={index}
									className={
										`header-menu-item header-menu-item
										${index === activeItem ? 'header-menu-item--active' : ''}`
									}
									onClick={() => {
										onClickHandler(index);
									}}
								>
									{item}
								</li>,
						)
					}
				</ul>
			</div>
		</section>
	);
}
