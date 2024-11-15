import {TodoKeyAction} from "@/types/types";

//Data
const curTodoKey: number = 1;

//Actions
export const GET_TODOKEY  = 'todoKey/GET_TODOKEY' as const;
export const INCREASE_TODOKEY = 'todo/INCREASE_TODOKEY' as const;

//Action Function
export const getTodoKey  = () : TodoKeyAction => ({
    type: GET_TODOKEY,
});

export const addTodoKey  = (todoKey : number) : TodoKeyAction => ({
    type: INCREASE_TODOKEY,
    todoKey
});


export const todoKeyReducer = (state: number = curTodoKey, action : TodoKeyAction ): number   => {
    switch (action.type) {
        case GET_TODOKEY:
            return state;
        case INCREASE_TODOKEY:
            return state+1;
        default:
            return state;
    }
}
export default todoKeyReducer;

