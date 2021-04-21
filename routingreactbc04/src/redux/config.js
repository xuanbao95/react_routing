import { applyMiddleware, combineReducers, createStore } from "redux";
import { phimReducer } from "./reducers/FilmReducer";
import reduxThunk from 'redux-thunk'
import { NguoiDungReducer } from "./reducers/NguoiDungReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";


const rootReducer = combineReducers({
    //chứa các state ứng dụng
    phimReducer: phimReducer,
    NguoiDungReducer: NguoiDungReducer,
    LoadingReducer: LoadingReducer,
})
//thunk là middle ware dùng để quản lý file dành cho xủ lý dispatch api lên ruducer
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));