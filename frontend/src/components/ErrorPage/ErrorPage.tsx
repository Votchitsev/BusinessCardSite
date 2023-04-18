import {useSelector} from 'react-redux';
import {type RootState} from '../../GlobalState/store';
import './ErrorPage.css';

export default function ErrorPage() {
	const error = useSelector<RootState>(
		state => state.error,
	) as string;

	return (
		<div className='error-message'>{ error }</div>
	);
}
