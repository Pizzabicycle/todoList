import {GET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO, UPDATE_ISCHECKED} from "@/redux/TodoReducer";
import {INCREASE_TODOKEY} from "@/redux/TodoKeyReducer";
import React from "react";
import TodoContainer from "@/app/component/TodoContainer";
import ToodoTemplete from "@/app/component/ToodoTemplete";

export type TodoType = {
    todo: string;
    todoKey: number;
    isChecked: boolean;
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

export interface UpdateIscheckedAction {
    type: typeof UPDATE_ISCHECKED;
    todo: TodoType;
}

export type GetAction = GetTodoAction;
export type SetActions = AddTodoAction | UpdateTodoAction | DeleteTodoAction | UpdateIscheckedAction;

export type TodoKeyAction = {
    type: typeof INCREASE_TODOKEY,
}

export type ReduxProviderType = {
    children: React.ReactNode;
}

type DispatchTodoAction = (todo: TodoType) => void

export type TodoContainerProps = {
    deleteButtonClick:() => void;
}

export type ToodoTempleteProps = {
    curTodoKey:number,
    todoList: TodoType[],
    dispatchAddTodo: DispatchTodoAction;
    dispatchUpdateTodo: DispatchTodoAction;
    dispatchDeleteTodo: DispatchTodoAction;
    dispatchUpdateIschecked: DispatchTodoAction;
    dispatchAddTodoKey:() => void;
    deleteButtonClick:() => void;
}

