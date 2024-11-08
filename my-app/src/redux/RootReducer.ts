import { combineReducers } from 'redux';
import todoKey from './TodoKeyReducer';
import todo from './TodoReducer';

const rootReducer = combineReducers({
    todoKey,
    todo
});

export default rootReducer;