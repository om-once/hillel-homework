const Item = props => {
	const { btnFunc, imgSrc, text } = props;
	return (
		<li className='smile__item'>
			<button onClick={btnFunc} className='smile__btn'>
				<img className='smile__img' src={imgSrc} alt='smile 2' />
			</button>
			<p className='smile__text'>{text}</p>
		</li>
	);
};

export default Item;
