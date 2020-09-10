// import { createStore } from 'redux';
import { createStore,applyMiddleware } from 'redux'
import Reducer from './reducer';


/**
 * 每个middlewares 接受 store的 dispatch 和 getState函数作为命名函数
 * 返回一个函数,该函数被传入被称为next的下一个middleware的dispatch方法
 * 
 */
function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => (next) => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }
      return next(action);
    };
}
let store = createStore(Reducer,{

},applyMiddleware(createThunkMiddleware()));

export default store;