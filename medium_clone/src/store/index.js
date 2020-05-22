import redux, { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    user: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("check store", store.getState()));

export default store;