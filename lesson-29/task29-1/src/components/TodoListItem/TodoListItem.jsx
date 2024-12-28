const TodoListItem = props => {
	const { text, newClass, completeFunc, deleteFunc } = props;
	return (
		<li className='todo-list__item'>
			<span className={newClass}>{text}</span>
			<div className='todo-list__btns'>
				<button className='btn btn-complete' onClick={completeFunc}>
					complete
				</button>
				<button className='btn btn-delete' onClick={deleteFunc}>
					delete
				</button>
			</div>
		</li>
	);
};

export default TodoListItem;
