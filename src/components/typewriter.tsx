import cn from 'classnames';
import { useState, useEffect } from 'react';
import Caret from './utils/caret';
const Typewriter = ({ words }: { words: string }) => {
	let [displayedWords, setDisplayedWords] = useState('');
	let [index, setIndex] = useState(0);
	let [className, setClassName] = useState('caret');
	useEffect(() => {
		if (displayedWords.length < words.length) {
			setTimeout(() => {
				setDisplayedWords((displayedWords += words[index]));
				setIndex((index += 1));
			}, (Math.random() + 20) * 10);
			setClassName('typing');
		} else {
			setClassName('caret');
		}
	});
	return (
		<div className="typewriter-container">
			welcome to <span className="words">{displayedWords}</span>{' '}
			<Caret className={className} />
		</div>
	);
};
export default Typewriter;
