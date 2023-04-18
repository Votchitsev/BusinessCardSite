const getCoordinates = (element: HTMLElement): number => {
	const box: DOMRect = element.getBoundingClientRect();

	return box.top + window.scrollY;
};

export default getCoordinates;
