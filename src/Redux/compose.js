const compose = (...funs)=>{
    console.log(funs);
    if(funs.length === 0){
        return arg=>arg;
    }
    if(funs.length === 1){
        return funs[0];
    }
    // 合并多个函数，将右边函数的返回值作为左边函数的参数
    return funs.reduce((a,b)=>{
        return (...args)=>{
            a(b(...args))
        }
    })
}
export default compose;