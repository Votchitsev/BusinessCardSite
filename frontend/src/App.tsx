import {Banner} from './components/banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';

function App() {
	return (
		<>
			<LangSwitcher />
			<Banner />
			<AboutMe />
			<Education />
			<Projects />
			<FeedbackForm />
		</>
	);
}

export default App;
