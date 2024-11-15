import React, {useState} from 'react';
import {TodoContainerProps, TodoType} from "@/types/types";

const ToodoTemplete = ({curTodoKey, todoList, dispatchAddTodo, dispatchUpdateTodo, dispatchDeleteTodo, dispatchAddTodoKey} : TodoContainerProps) => {
    const [chkKey, setChkKey] = useState<number>(0);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [readOnly, setReadOnly] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoType[]>(todoList);
    const [currentTodoKey, setCurrentTodoKey] = useState<number>(curTodoKey)

    const editButtonClick = () => {
        alert("수정되었습니다.");
        setReadOnly(false);
    };

    const addButtonClick= () => {
        dispatchAddTodo({todoKey:currentTodoKey, todo:text});
        dispatchAddTodoKey(currentTodoKey);
        setText("");
        console.log(todos);
   };

    const setText_EnterEvent = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            setText(text);
            setReadOnly(true);
        }
    };

    return (
        <React.Fragment>
            <div>
                {todos.length > 0 ? todos.map(todo =>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <input type="checkbox"
                                   key={todo.todoKey}
                                   checked={isChecked}
                                   onChange={(e) => setIsChecked(e.target.checked)}
                            />

                            <input type="text"
                                   value={todo.todo}
                                   readOnly={readOnly}
                                   onChange={(e) => setText(e.target.value)}
                                   placeholder="Enter text"
                                   style={{padding: '5px', width: '200px', color: 'black'}}
                                   onKeyDown={setText_EnterEvent}
                            />

                            <button onClick={editButtonClick}
                                    style={{padding: '5px 10px'}}>
                                Edit
                            </button>
                        </div>
                    )
                    : null
                }
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <input type="checkbox"
                       key={currentTodoKey}
                       checked={isChecked}
                       onChange={(e) => setIsChecked(e.target.checked)}
                />

                <input type="text"
                       value={text}
                       readOnly={readOnly}
                       onChange={(e) => setText(e.target.value)}
                       placeholder="Enter text"
                       style={{padding: '5px', width: '200px', color: 'black'}}
                       onKeyDown={setText_EnterEvent}
                />
                <button onClick={addButtonClick}
                        style={{padding: '5px 10px'}}>
                    Save
                </button>
            </div>
        </React.Fragment>
    );
};

export default ToodoTemplete;