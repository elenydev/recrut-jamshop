import { combineReducers } from "redux"
import selectProducts from "../store/products"

export default combineReducers({ products: selectProducts })
