import {createRoot} from 'react-dom/client';
import App from './App';
import {store} from './GlobalState/store';
import {Provider} from 'react-redux';
import './index.css';

const container = document.querySelector('#root');
const root = createRoot(container! as HTMLElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
