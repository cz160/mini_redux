const actionCreates = {
   add:(data)=>{
       return {
           type:'ADD',
           payload:{...data},
       }
   },
   decrese:(data)=>{
    return {
        type:'decrese',
        payload:{...data},
    }
   },
   asyncTest:(data)=>{
    return {
        type:'asyncTest',
        payload:{...data},
    }
   }  
}
export default actionCreates;