/* 
  该文件用于暴露一个store对象，整个应用只有一个store对象
*/
import { legacy_createStore as createStore } from 'redux'
import userReducer from './user_reducer'
export default createStore(userReducer)