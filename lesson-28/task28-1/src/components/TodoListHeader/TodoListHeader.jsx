const TodoListHeader = props => {
	const { changeFunc, inputValue, inputRef, todoAdd } = props;
	return (
		<div className='todo__header'>
			<input
				onChange={changeFunc}
				value={inputValue}
				type='text'
				ref={inputRef}
				className='todo-input'
			/>
			<button onClick={todoAdd}>add</button>
		</div>
	);
};

export default TodoListHeader;
