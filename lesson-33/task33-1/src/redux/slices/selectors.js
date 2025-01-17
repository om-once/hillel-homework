export default {
	items: state => state.swapi.items,
	isLoading: state => state.swapi.loading,
	todos: state => state.todos.items,
	isLoadingTodo: state => state.todos.loading,
};
