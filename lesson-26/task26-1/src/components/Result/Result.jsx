import { Component } from 'react';
class Result extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='smile__result'>
				<h2>Результати голосування</h2>
				<h3>Переможець:</h3>
				<div>
					<img src={this.props.resultImg} alt='Переможець' />
				</div>
				<p>Кількість голосів: {this.props.resultCount}</p>
			</div>
		);
	}
}

export default Result;
