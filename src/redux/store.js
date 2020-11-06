import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import results from "./reducers/results";

const store = createStore(results, applyMiddleware(thunk));

export default store;
