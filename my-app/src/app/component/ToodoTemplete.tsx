import React, {useState} from 'react';
import {TodoType, ToodoTempleteProps} from "@/types/types";

const ToodoTemplete = ({curTodoKey, todoList, dispatchAddTodo, dispatchUpdateTodo, dispatchDeleteTodo, dispatchUpdateIschecked, dispatchAddTodoKey, deleteButtonClick} : ToodoTempleteProps) => {
    const [text, setText] = useState<string>("");

    const todos: TodoType[]= todoList;
    const currentTodoKey= curTodoKey;

    const updateButtonClick = () => {
        alert("수정되었습니다.");
    };

    const addButtonClick= () => {
        dispatchAddTodo({todoKey:currentTodoKey, todo:text, isChecked:false});
        dispatchAddTodoKey();
        setText("");
   };

    const addTodoEnter = (e: React.KeyboardEvent<HTMLInputElement> ) => {
        if (e.key === 'Enter') {
            dispatchAddTodo({todoKey:currentTodoKey, todo:text, isChecked:false});
            dispatchAddTodoKey();
            setText("");
            alert("입력되었습니다.")
        }
    };

    const updateTodoEnter = (e: React.KeyboardEvent<HTMLInputElement>, todo:TodoType) => {
        if (e.key === 'Enter'){
            if(confirm("수정하시겠습니까?"))
                dispatchUpdateTodo({...todo, todo: e.currentTarget.value});
        }
    };

    const isCheckedOnChange= (todo: TodoType) => {
        dispatchUpdateIschecked({...todo, isChecked: !todo.isChecked});
    };

    return (
        <React.Fragment>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px'}}>
                <input type="text"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       placeholder="Enter text"
                       style={{padding: '5px', width: '200px', color: 'black'}}
                       onKeyDown={(e) => addTodoEnter(e)}
                />
                <button onClick={addButtonClick}
                        style={{padding: '5px 10px', marginBottom: '10px'}}>
                    Save
                </button>
            </div>
            <div>
                {todos.length > 0 ? todos.map(todo =>
                        <div key={todo.todoKey}
                             style={{display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px', marginBottom: '5px'}}>
                            <input type="checkbox"
                                   checked={todo.isChecked}
                                   onChange={() => isCheckedOnChange(todo)}
                            />

                            <input type="text"
                                   value={todo.todo}
                                   onChange={(e) => (e.target.value)}
                                   placeholder="Enter text"
                                   style={{padding: '5px', width: '200px', color: 'black'}}
                                   onKeyDown={(e) => updateTodoEnter(e, todo)}
                            />

                            <button onClick={updateButtonClick}
                                    style={{padding: '5px 10px'}}>
                                Edit
                            </button>
                        </div>
                    )
                    : null
                }
            </div>
        </React.Fragment>
    );
};

export default ToodoTemplete;