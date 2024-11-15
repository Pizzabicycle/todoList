import React, {Dispatch} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {SetActions, TodoType, GetAction} from "@/types/types";
import ToodoTemplete from "@/app/component/ToodoTemplete";
import {addTodo, deleteTodo, updateTodo} from "@/redux/TodoReducer";
import {customUseSelector} from "@/customHooks/hooks";
import {addTodoKey} from "@/redux/TodoKeyReducer";

const TodoContainer = () => {
    const todoList: TodoType[] = customUseSelector(state => state.todo.todoList);
    const curTodoKey:number = customUseSelector(state => state.todoKey);
    const dispatch:Dispatch<any> = useDispatch();
    const dispatchAddTodo =  (todo: TodoType) => dispatch(addTodo(todo));
    const dispatchUpdateTodo =  (todo: TodoType) => dispatch(updateTodo(todo));
    const dispatchDeleteTodo =  (todo: TodoType) => dispatch(deleteTodo(todo));
    const dispatchAddTodoKey =  (todoKey:number) => dispatch(addTodoKey(todoKey));


    return (
        <ToodoTemplete
            curTodoKey={curTodoKey}
            todoList={todoList}
            dispatchAddTodo={dispatchAddTodo}
            dispatchUpdateTodo={dispatchUpdateTodo}
            dispatchDeleteTodo={dispatchDeleteTodo}
            dispatchAddTodoKey={dispatchAddTodoKey}
        />
    );
};

export default TodoContainer;