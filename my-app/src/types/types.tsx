import {GET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO, addTodo} from "@/redux/TodoReducer";
import {GET_TODOKEY, INCREASE_TODOKEY} from "@/redux/TodoKeyReducer";
import React, {Dispatch} from "react";

export type TodoType = {
    todo: string;
    todoKey: number;
};

export type TodoListType={
    todoList: Array<TodoType>;
}

export interface GetTodoAction {
    type: typeof GET_TODO;
}

export interface AddTodoAction {
    type: typeof ADD_TODO;
    todo: TodoType;
}

export interface UpdateTodoAction {
    type: typeof UPDATE_TODO;
    todo: TodoType;
}

export interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    todo: TodoType;
}

export type GetAction = GetTodoAction;
export type SetActions = AddTodoAction | UpdateTodoAction | DeleteTodoAction;

export type TodoKeyAction = {
    type: typeof GET_TODOKEY | typeof INCREASE_TODOKEY,
    todoKey?: number
}

export type ReduxProviderType = {
    children: React.ReactNode;
}

type DispatchTodoAction = (todo: TodoType) => void

export type TodoContainerProps = {
    curTodoKey:number,
    todoList: TodoType[],
    dispatchAddTodo: DispatchTodoAction;
    dispatchUpdateTodo: DispatchTodoAction;
    dispatchDeleteTodo: DispatchTodoAction;
    dispatchAddTodoKey:(todoKey:number) => void;
}
