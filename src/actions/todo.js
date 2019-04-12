export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function getTodos() {
	return {
		type: GET_TODOS,
		request: {
			url: 'api/todos',
			method: 'get',
			body: {}
		}
	};
}

export function addTodo(title) {
	return {
		type: ADD_TODO,
		request: {
			url: 'api/todos',
			method: 'post',
			body: { title }
		}
	}
}


export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		request: {
			url: `api/todos/${id}`,
			method: 'delete',
			body: {}
		} 
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		request: {
			url: `api/todos/${id}`,
			method: 'patch',
			body: { }
		} 
	}
}

export function editTodo(id, title) {
	return  {
		type: EDIT_TODO,
		request: {
			url: `api/todos/${id}`,
			method: 'put',
			body: { title }
		} 
	}
}