const TodoListItem = props => {
	const { text } = props;
	return (
		<li className='todo-list__item'>
			<span>{text}</span>
			<div className='todo-list__btns'>
				<button className='btn btn-complete'>complete</button>
				<button className='btn btn-delete'>delete</button>
			</div>
		</li>
	);
};

export default TodoListItem;
