import redux, { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import articleReducer from "./reducers/articleReducer";

const rootReducer = combineReducers({
    user: userReducer,
    article: articleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("check store", store.getState()));

export default store;