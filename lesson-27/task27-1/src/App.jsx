import { useEffect, useState } from 'react';
import Item from './components/Item/Item';
import Result from './components/Result/Result';

import coolFace from './assets/cool.png';
import happyFace from './assets/happy-face.png';
import inLoveFace from './assets/in-love.png';
import smileFace from './assets/smile.png';
import starFace from './assets/star.png';

const App = () => {
	const initialState = {
		button1: { count: 0, src: happyFace },
		button2: { count: 0, src: smileFace },
		button3: { count: 0, src: coolFace },
		button4: { count: 0, src: starFace },
		button5: { count: 0, src: inLoveFace },
		resultImage: '',
		resultCount: 0,
	};

	const [buttonsState, setButtonsState] = useState(() => {
		const savedState = localStorage.getItem('voteState');
		return savedState ? JSON.parse(savedState) : initialState;
	});

	useEffect(() => {
		localStorage.setItem('voteState', JSON.stringify(buttonsState));
	}, [buttonsState]);

	const incrementCount = buttonName => {
		setButtonsState(prevState => ({
			...prevState,
			[buttonName]: {
				...prevState[buttonName],
				count: prevState[buttonName].count + 1,
			},
		}));
	};

	const calcWinner = () => {
		const buttons = Object.values(buttonsState).filter(button => button.src);
		const winner = buttons.reduce((max, current) =>
			current.count > max.count ? current : max,
		);
		setButtonsState(prevState => ({
			...prevState,
			resultImage: winner.src,
			resultCount: winner.count,
		}));
	};

	const resetVotes = () => {
		setButtonsState(initialState);
		localStorage.setItem('voteState', JSON.stringify(initialState));
	};

	return (
		<div className='smile'>
			<h1>Голосування за кращий смайлик</h1>
			<ul className='smile__list'>
				{Object.keys(buttonsState)
					.filter(key => key.startsWith('button'))
					.map(key => (
						<Item
							key={key}
							btnFunc={() => incrementCount(key)}
							imgSrc={buttonsState[key].src}
							text={buttonsState[key].count}
						/>
					))}
			</ul>
			<div className='smile__btns'>
				<button onClick={calcWinner}>Показати результат</button>
				<button onClick={resetVotes} className='reset'>
					Скинути
				</button>
			</div>
			{buttonsState.resultImage && (
				<Result
					resultImg={buttonsState.resultImage}
					resultCount={buttonsState.resultCount}
				/>
			)}
		</div>
	);
};

export default App;
