import React from 'react';
const TodoListItem = props => {
	const { text, newClass, completeFunc, deleteFunc } = props;
	return (
		<li data-testid='todo-item' className='todo-list__item'>
			<span data-testid='todo-item-text' className={newClass}>
				{text}
			</span>
			<div className='todo-list__btns'>
				<button
					data-testid='todo-item-complete'
					className='btn btn-complete'
					onClick={completeFunc}
				>
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
