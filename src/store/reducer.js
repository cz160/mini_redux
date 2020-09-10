import { combineReducers } from '../Redux';
const defaultState = {
    count:0,
}
const Count = (prevState=defaultState,action)=>{
    let new_state = Object.assign({},prevState);
    switch(action.type){
        case "ADD":
            new_state = {
                count:new_state.count+1,
            }
            return new_state;
        case "decrese":
            new_state = {
                count:new_state.count-1,
            }
            return new_state;
        default:
            return prevState;    
    }
}
const Test = (prevState={text:'测试'},action)=>{
    let new_state = Object.assign({},prevState);
    switch(action.type){
        case "updata":
            new_state = {
                text:'更新',
            }
            return new_state;
        default:
            return prevState;    
    }
}

export default combineReducers({
    Count,
    Test,
});