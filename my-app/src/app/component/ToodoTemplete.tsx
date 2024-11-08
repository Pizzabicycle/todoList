import React, { useState } from 'react';

const ToodoTemplete = () => {
    const [chkKey, setChkKey] = useState<number>(0);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [readOnly, setReadOnly] = useState<boolean>(false);

    const editButtonClick = () => {
        setReadOnly(false);
    };

    const setText_EnterEvent = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            setText(text);
            setReadOnly(true);
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <input type="checkbox"
                   key={chkKey}
                   checked={isChecked}
                   onChange={(e) => setIsChecked(e.target.checked)}
            />

            <input type="text"
                   value={text}
                   readOnly={readOnly}
                   onChange={(e) => setText(e.target.value)}
                   placeholder="Enter text"
                   style={{padding: '5px', width: '200px'}}
                   onKeyDown={setText_EnterEvent}
            />

            <button onClick={editButtonClick} style={{padding: '5px 10px'}}>
                Edit
            </button>
        </div>
    );
};

export default ToodoTemplete;