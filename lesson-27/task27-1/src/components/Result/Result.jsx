const Result = props => {
	const { resultImg, resultCount } = props;
	return (
		<div className='smile__result'>
			<h2>Результати голосування</h2>
			<h3>Переможець:</h3>
			<div>
				<img src={resultImg} alt='Переможець' />
			</div>
			<p>Кількість голосів: {resultCount}</p>
		</div>
	);
};

export default Result;
