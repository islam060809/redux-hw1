import { combineReducers, createStore } from "redux";
import counReducer from "./reducers/countRe";
import todoReducer from "./reducers/todoRe";

const root =combineReducers({
    count:counReducer,
    todo:todoReducer
})

const store = createStore(root)

export default store