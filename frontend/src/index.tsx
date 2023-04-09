import {createRoot} from 'react-dom/client';
import App from './App';
import {LangState} from './context/LangContext';
import {store} from './GlobalState/store';
import {Provider} from 'react-redux';
import './index.css';

const container = document.querySelector('#root');
const root = createRoot(container! as HTMLElement);

root.render(
	<Provider store={store}>
		<LangState>
			<App />
		</LangState>
	</Provider>,
);
