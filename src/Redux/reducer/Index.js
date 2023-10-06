import { combineReducers } from "redux";
import handleCart from "./HandleCart";
export const reducers = combineReducers({
    handelCart : handleCart
})