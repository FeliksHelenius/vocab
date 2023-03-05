import '../assets/style.scss';
import Typewriter from './typewriter';
const Landing = () => {
	return (
		<main>
			<header>
				<Typewriter words="vocab" />
			</header>
			<button>start</button>
		</main>
	);
};

export default Landing;
