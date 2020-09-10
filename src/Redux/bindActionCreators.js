function bindActionCreators(actionCreates,dispatch){
    return function(){
        dispatch(actionCreates.apply(this,arguments));
    }
}
export default bindActionCreators;