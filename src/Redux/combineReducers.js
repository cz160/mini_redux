function combineReducers(reducers){
    return function combination(state={},action){
        const newState = {};
        for(let key in reducers){
            newState[key] = reducers[key](state[key],action);
        }
        return newState;
    }
}
export default combineReducers;