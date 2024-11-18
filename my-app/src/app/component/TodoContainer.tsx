import React, {Dispatch} from 'react';
import {useDispatch} from "react-redux";
import {TodoContainerProps, TodoType} from "@/types/types";
import ToodoTemplete from "@/app/component/ToodoTemplete";
import {addTodo, deleteTodo, updateTodo} from "@/redux/TodoReducer";
import {customUseSelector} from "@/customHooks/hooks";
import {addTodoKey} from "@/redux/TodoKeyReducer";

const TodoContainer = ({deleteButtonClick} : TodoContainerProps ) => {
    const todoList: TodoType[] = customUseSelector(state => state.todo.todoList);
    const curTodoKey:number = customUseSelector(state => state.todoKey);
    const dispatch:Dispatch<any> = useDispatch();
    const dispatchAddTodo =  (todo: TodoType) => dispatch(addTodo(todo));
    const dispatchUpdateTodo =  (todo: TodoType) => dispatch(updateTodo(todo));
    const dispatchDeleteTodo =  (todo: TodoType) => dispatch(deleteTodo(todo));
    const dispatchUpdateIschecked =  (todo: TodoType) => dispatch(updateTodo(todo));
    const dispatchAddTodoKey =  () => dispatch(addTodoKey());


    return (
        <ToodoTemplete
            curTodoKey={curTodoKey}
            todoList={todoList}
            dispatchAddTodo={dispatchAddTodo}
            dispatchUpdateTodo={dispatchUpdateTodo}
            dispatchDeleteTodo={dispatchDeleteTodo}
            dispatchUpdateIschecked={dispatchUpdateIschecked}
            dispatchAddTodoKey={dispatchAddTodoKey}
            deleteButtonClick={deleteButtonClick}
        />
    );
};

export default TodoContainer;