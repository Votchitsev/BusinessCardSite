import {Banner} from './components/banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Header from './components/Header/Header';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import ErrorPage from './components/ErrorPage/ErrorPage';
import {useSelector} from 'react-redux';
import {type RootState} from './GlobalState/store';
import Footer from './components/Footer/Footer';

function App() {
	const error = useSelector<RootState>(
		state => state.error,
	);

	return (
		error
			? <ErrorPage />
			: <>
				<Header />
				<Banner />
				<AboutMe />
				<Education />
				<Projects />
				<FeedbackForm />
				<LangSwitcher />
				<Footer />
			</>
	);
}

export default App;
