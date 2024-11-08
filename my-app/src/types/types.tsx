import {GET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO} from "@/redux/TodoReducer";
import {GET_TODOKEY, INCREASE_TODOKEY} from "@/redux/TodoKeyReducer";

export type TodoType = {
    todo: string;
    todoKey: number;
};

export type TodoListType={
    todoList: Array<TodoType>;
}

interface GetTodoAction {
    type: typeof GET_TODO;
}

interface AddTodoAction {
    type: typeof ADD_TODO;
    todo: TodoType;
}

interface UpdateTodoAction {
    type: typeof UPDATE_TODO;
    todo: TodoType;
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    todo: TodoType;
}

export type GetAction = GetTodoAction;
export type SetActions = AddTodoAction | UpdateTodoAction | DeleteTodoAction;

export type TodoKeyAction = {
    type: typeof GET_TODOKEY | typeof INCREASE_TODOKEY,
    todoKey?: number
}

