// System Import
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
// Reducer Import
import header from "./header";
import weather, { weatherPostSaga } from "./weather";
import view, { viewPostSaga } from "./view";

const rootReducer = combineReducers({
    header,
    weather,
    view
});

export function* rootSaga(){
    yield all([
        weatherPostSaga(),
        viewPostSaga()
    ]);
}

export default rootReducer;
