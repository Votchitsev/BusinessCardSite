import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {HashLink} from 'react-router-hash-link';
import {type RootState} from '../../GlobalState/store';
import {type ElementPositionsType, type Content} from '../../GlobalState/types';
import useScrollPosition from '../../hooks/useScrollPosition';
import useActiveItem from '../../hooks/useActiveItem';
import './Header.css';

export default function Header() {
	const content = useSelector<RootState>(
		state => state.language.content,
	) as Content;

	const activeElement = useActiveItem();

	const [fixHeader, setFixHeader] = useState(false);
	const [activeDropDownMenu, setActiveDropDownMenu] = useState(false);

	const position = useScrollPosition();

	const elementPositions = useSelector<RootState>(
		state => state.elementPositions.elementPositions,
	) as ElementPositionsType;

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

	const onClickHandler = (index: number) => {
		const targetElement = elementPositions.find(element => element.index === index);

		if (!targetElement) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

			return;
		}

		window.scrollTo({
			top: targetElement.offsetTop + 1,
			behavior: 'smooth',
		});
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
								<li
									key={index}
									onClick={() => {
										onClickHandler(index);
									}}
									className={
										`header-menu-item ${
											index === activeElement
												? 'header-menu-item--active'
												: ''
										}`
									}
								>{ item }</li>,
						)
					}
				</ul>
			</div>
		</section>
	);
}
