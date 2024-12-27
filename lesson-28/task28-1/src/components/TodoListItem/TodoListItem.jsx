const TodoListItem = props => {
	const { text, completeFunc, deleteFunc, newClass } = props;
	return (
		<li className='todo-list__item'>
			<span className={newClass}>{text}</span>
			<div className='todo-list__btns'>
				<button className='todo-list__complete' onClick={completeFunc}>
					complete
				</button>
				<button className='todo-list__delete' onClick={deleteFunc}>
					delete
				</button>
			</div>
		</li>
	);
};

export default TodoListItem;
