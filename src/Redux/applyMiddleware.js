import compose from './compose';
// 参数：中间件 
const applyMiddleware = (...middleware) =>{
    return function(oldCreateStore){
        return function newCreateStore(reducer,initState){
            // 生产store
            const store = oldCreateStore(reducer,initState);
            // 给每个中间件传入 getState,dispatch,other
            const simpleStore = {
                getState:store.getState,
            }
            const chain = middleware.map(item=>item(simpleStore))
            // 重写dispatch
            const dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch,
            }
        }
    }
}
export default applyMiddleware;