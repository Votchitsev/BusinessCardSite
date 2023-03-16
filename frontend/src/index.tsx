import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container, HTMLElement);

root.render(
	<App />,
);
