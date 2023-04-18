import {Banner} from './components/banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Header from './components/Header/Header';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';

function App() {
	return (
		<>
			<Header />
			<Banner />
			<AboutMe />
			<Education />
			<Projects />
			<FeedbackForm />
			<LangSwitcher />
		</>
	);
}

export default App;
