import { combineReducers, legacy_createStore as createStore } from "redux"
import todolist from "../modules/todolist"

const rootReducer = combineReducers({
  todolist: todolist,
})
const store = createStore(rootReducer)

export default store
