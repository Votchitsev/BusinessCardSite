import {useSelector} from 'react-redux';
import {type RootState} from '../GlobalState/store';
import {type ElementPositionsType} from '../GlobalState/types';
import useScrollPosition from './useScrollPosition';

export default function useActiveItem(): number {
	const scrollPosition = useScrollPosition();
	const positions = useSelector<RootState>(
		state => state.elementPositions.elementPositions,
	) as ElementPositionsType;

	const activePositions = positions.filter(
		position => position.offsetTop < scrollPosition,
	);

	if (!activePositions[activePositions.length - 1]) {
		return 0;
	}

	return activePositions[activePositions.length - 1].index;
}
