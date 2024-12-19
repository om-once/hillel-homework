import { Component } from 'react';
class Item extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li className='smile__item'>
				<button onClick={this.props.btnFunc} className='smile__btn'>
					<img className='smile__img' src={this.props.imgSrc} alt='smile 2' />
				</button>
				<p className='smile__text'>{this.props.text}</p>
			</li>
		);
	}
}

export default Item;
