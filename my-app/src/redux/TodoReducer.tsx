import {TodoType, TodoListType, GetAction, SetActions} from "@/types/types";

//Data
const todoList: TodoListType = {
    todoList: []
};

//Actions
export const GET_TODO  = 'todo/GET_TODO' as const;
export const ADD_TODO = 'todo/ADD_TODO' as const;
export const UPDATE_TODO = 'todo/UPDATE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;
export const UPDATE_ISCHECKED = 'todo/UPDATE_ISCHECKED' as const;


//Action Function
export const getTodoList  = () : GetAction => ({
    type: GET_TODO,
});

export const addTodo  = (todo : TodoType) : SetActions => ({
    type: ADD_TODO,
    todo
});

export const updateTodo = (todo : TodoType) : SetActions => ({
    type: UPDATE_TODO,
    todo
});

export const deleteTodo = (todo : TodoType) : SetActions => ({
    type: DELETE_TODO,
    todo
});

export const updateIsChecked = (todo : TodoType) : SetActions => ({
    type: UPDATE_ISCHECKED,
    todo
});

export const todoReducer = (state: TodoListType = todoList, action : GetAction | SetActions ):TodoListType   => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.todo]
            };
        case UPDATE_TODO:
            return {
                ...state,
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

        case UPDATE_ISCHECKED:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.todoKey === action.todo.todoKey
                                                ? {...todo, isChecked: action.todo.isChecked}
                                                : todo
                                            )
            };

        default:
            return state;
    }
}
export default todoReducer;

