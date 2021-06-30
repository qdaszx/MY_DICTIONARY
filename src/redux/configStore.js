import { createStore, combineReducers } from "redux";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";
// 원래 여러개의 리듀서가 있을텐데 결국엔 하나에 스토어에 뭉쳐야 한다.
export const history = createBrowserHistory(); // 나중에 알아보자

const rootReducer = combineReducers({ dictionary });

const store = createStore(rootReducer);

export default store;
