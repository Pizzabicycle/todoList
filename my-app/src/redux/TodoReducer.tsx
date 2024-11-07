import {TodoType, TodoListType, TodoActions} from "../types/types";

//Data
const todoList: TodoListType = {
    todoList: []
};
let todoKey: number = 0;

//Actions
export const GET_TODO  = 'todo/GET_TODO' as const;
export const ADD_TODO = 'todo/ADD_TODO' as const;
export const UPDATE_TODO = 'todo/UPDATE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;

//Action Function
export const getTodoList  = () : TodoActions => ({
    type: GET_TODO,
});

export const addTodo  = (todo : TodoType) : TodoActions => ({
    type: ADD_TODO,
    todo
});

export const updateTodo = (todo : TodoType) : TodoActions => ({
    type: UPDATE_TODO,
    todo
});

export const deleteTodo = (todo : TodoType) : TodoActions => ({
    type: DELETE_TODO,
    todo
});

export const todoReducer = (state: TodoListType = todoList, action : TodoActions )   => {
    switch (action.type) {
        case GET_TODO:
            return state.todoList;
        case ADD_TODO:
            return state.todoList.concat(action.todo);
        case UPDATE_TODO:
            return {
                ...state.todoList,
                todoList: state.todoList.map(todo => todo.todoKey === action.todo.todoKey
                                                              ? {...action.todo}
                                                              : todo
                                            )
            };
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.todoKey !== action.todo.todoKey)
            };
        default:
            return state;
    }
}
export default todoReducer;

