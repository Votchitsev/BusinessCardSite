import {Banner} from './components/banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import {ProjectsState} from './context/ProjectsContext';

function App() {
	return (
		<>
			<Banner />
			<AboutMe />
			<Education />
			<ProjectsState>
				<Projects />
			</ProjectsState>
		</>
	);
}

export default App;
