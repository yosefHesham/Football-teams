import {applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import leaguesReducer from "./teams/teams_reducer";



const store = createStore(leaguesReducer,applyMiddleware(thunk,logger))

export default store;