import {GET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO} from "@/redux/TodoReducer";

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

export type TodoActions = GetTodoAction | AddTodoAction | UpdateTodoAction | DeleteTodoAction;

export type ReducerParamType={
    state : StateType,
    action : ActionType
}