import {TodoKeyAction} from "@/types/types";

//Data
const curTodoKey: number = 1;

//Actions
export const INCREASE_TODOKEY = 'todo/INCREASE_TODOKEY' as const;

//Action Function
export const addTodoKey  = () : TodoKeyAction => ({
    type: INCREASE_TODOKEY,
});


export const todoKeyReducer = (state: number = curTodoKey, action : TodoKeyAction ): number   => {
    switch (action.type) {
        case INCREASE_TODOKEY:
            state += 1;
            return state;
        default:
            return state;
    }
}
export default todoKeyReducer;

