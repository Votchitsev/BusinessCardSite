import ReactDOM from 'react-dom/client';
import App from './App';
import {LangState} from './context/LangContext';
import './index.css';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
	<LangState>
		<App />
	</LangState>,
);
