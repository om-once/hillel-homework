import { Component } from 'react';

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

	btn1IncrementCount() {
		this.setState(prevState => ({
			button1: {
				...prevState.button1,
				count: prevState.button1.count + 1,
			},
		}));
	}

	btn2IncrementCount() {
		this.setState(prevState => ({
			button2: {
				...prevState.button2,
				count: prevState.button2.count + 1,
			},
		}));
	}

	btn3IncrementCount() {
		this.setState(prevState => ({
			button3: {
				...prevState.button3,
				count: prevState.button3.count + 1,
			},
		}));
	}

	btn4IncrementCount() {
		this.setState(prevState => ({
			button4: {
				...prevState.button4,
				count: prevState.button4.count + 1,
			},
		}));
	}

	btn5IncrementCount() {
		this.setState(prevState => ({
			button5: {
				...prevState.button5,
				count: prevState.button5.count + 1,
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
					<li className='smile__item'>
						<button
							onClick={this.btn1IncrementCount.bind(this)}
							className='smile__btn'
						>
							<img
								className='smile__img'
								src={this.state.button1.src}
								alt='smile 1'
							/>
						</button>
						<p className='smile__text'>{this.state.button1.count}</p>
					</li>
					<li className='smile__item'>
						<button
							onClick={this.btn2IncrementCount.bind(this)}
							className='smile__btn'
						>
							<img
								className='smile__img'
								src={this.state.button2.src}
								alt='smile 2'
							/>
						</button>
						<p className='smile__text'>{this.state.button2.count}</p>
					</li>
					<li className='smile__item'>
						<button
							onClick={this.btn3IncrementCount.bind(this)}
							className='smile__btn'
						>
							<img
								className='smile__img'
								src={this.state.button3.src}
								alt='smile 3'
							/>
						</button>
						<p className='smile__text'>{this.state.button3.count}</p>
					</li>
					<li className='smile__item'>
						<button
							onClick={this.btn4IncrementCount.bind(this)}
							className='smile__btn'
						>
							<img
								className='smile__img'
								src={this.state.button4.src}
								alt='smile 4'
							/>
						</button>
						<p className='smile__text'>{this.state.button4.count}</p>
					</li>
					<li className='smile__item'>
						<button
							onClick={this.btn5IncrementCount.bind(this)}
							className='smile__btn'
						>
							<img
								className='smile__img'
								src={this.state.button5.src}
								alt='smile 5'
							/>
						</button>
						<p className='smile__text'>{this.state.button5.count}</p>
					</li>
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
					<div className='smile__result'>
						<h2>Результати голосування</h2>
						<h3>Переможець:</h3>
						<div>
							<img src={this.state.resultImage} alt='Переможець' />
						</div>
						<p>Кількість голосів: {this.state.resultCount}</p>
					</div>
				)}
			</div>
		);
	}
}

export default App;
