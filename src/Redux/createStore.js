function createStore(reducer,initState,rewriteCreateStoreFunc){
    // 存在重写createStore函数
    if(rewriteCreateStoreFunc){
        const newCreateStore = rewriteCreateStoreFunc(createStore);
        return newCreateStore(reducer,initState);
    }
    let state = initState; // 状态值
    let listerners = []; // 监听者存储
    function replaceReducer(nextReducer){
        reducer = nextReducer;
        dispatch({
            type:Symbol()
        })
    }
    // 修改
    function dispatch(action){
        state = reducer(state,action);
        listerners.forEach(item=>{
            item();
        })
    }
    // 获取
    function getState(){
        return state;
    }
    // 监听
    function subscribe(listerner){
        listerners.push(listerner);
        return function unsubscribe(){
            listerners.splice(listerners.indexOf(listerner),1);
        }
    }
    // 初始化值
    dispatch({type:Symbol()})

    return {
        getState,
        subscribe,
        dispatch,
        replaceReducer,
    }
}

export default createStore;