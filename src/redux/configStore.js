import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";
// 원래 여러개의 리듀서가 있을텐데 결국엔 하나에 스토어에 뭉쳐야 한다.
export const history = createBrowserHistory(); // 나중에 알아보자

const middlewares = [thunk];

// store 연결해주기 위해서
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ dictionary });

const store = createStore(rootReducer, enhancer);

export default store;
