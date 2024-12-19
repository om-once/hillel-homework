import { Component } from 'react';
import Item from './components/Item/Item';
import Result from './components/Result/Result';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			button1: {
				count: 0,
				src: '../src/assets/happy-face.png',
			},
			button2: {
				count: 0,
				src: '../src/assets/smile.png',
			},
			button3: {
				count: 0,
				src: '../src/assets/cool.png',
			},
			button4: {
				count: 0,
				src: '../src/assets/star.png',
			},
			button5: {
				count: 0,
				src: '../src/assets/in-love.png',
			},
			resultImage: '',
			resultCount: 0,
		};
	}

	componentDidMount() {
		const savedState = JSON.parse(localStorage.getItem('voteState'));
		if (savedState) {
			this.setState(savedState);
		}
	}

	componentDidUpdate(_, prevState) {
		if (prevState !== this.state) {
			localStorage.setItem('voteState', JSON.stringify(this.state));
		}
	}

	incrementCount(buttonName) {
		this.setState(prevState => ({
			[buttonName]: {
				...prevState[buttonName],
				count: prevState[buttonName].count + 1,
			},
		}));
	}

	calcWinner() {
		const buttons = [
			this.state.button1,
			this.state.button2,
			this.state.button3,
			this.state.button4,
			this.state.button5,
		];

		const winner = buttons.reduce((max, current) =>
			current.count > max.count ? current : max,
		);

		this.setState({
			resultImage: winner.src,
			resultCount: winner.count,
		});
	}

	resetVotes() {
		this.setState({
			button1: { ...this.state.button1, count: 0 },
			button2: { ...this.state.button2, count: 0 },
			button3: { ...this.state.button3, count: 0 },
			button4: { ...this.state.button4, count: 0 },
			button5: { ...this.state.button5, count: 0 },
			resultImage: '',
			resultCount: 0,
		});
	}

	render() {
		return (
			<div className='smile'>
				<h1>Голосування за кращий смайлик</h1>
				<ul className='smile__list'>
					<Item
						btnFunc={() => this.incrementCount('button1')}
						imgSrc={this.state.button1.src}
						text={this.state.button1.count}
					/>
					<Item
						btnFunc={() => this.incrementCount('button2')}
						imgSrc={this.state.button2.src}
						text={this.state.button2.count}
					/>
					<Item
						btnFunc={() => this.incrementCount('button3')}
						imgSrc={this.state.button3.src}
						text={this.state.button3.count}
					/>
					<Item
						btnFunc={() => this.incrementCount('button4')}
						imgSrc={this.state.button4.src}
						text={this.state.button4.count}
					/>
					<Item
						btnFunc={() => this.incrementCount('button5')}
						imgSrc={this.state.button5.src}
						text={this.state.button5.count}
					/>
				</ul>
				<div className='smile__btns'>
					<button onClick={this.calcWinner.bind(this)}>
						Показати результат
					</button>
					<button onClick={this.resetVotes.bind(this)} className='reset'>
						Скинути
					</button>
				</div>
				{this.state.resultImage && (
					<Result
						resultImg={this.state.resultImage}
						resultCount={this.state.resultCount}
					/>
				)}
			</div>
		);
	}
}

export default App;
