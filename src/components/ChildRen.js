import React,{ Children } from 'react';

function ChildRen(props){
    const { children } = props;
    Children.map(children,(thisArg)=>{
        console.log(thisArg);
    })
    console.log(Children.count(children)) // 子节点个数
    console.log(Children.only(children)) // 验证是否只有一个子节点，是-返回它 否-抛出错误
    console.log(Children.toArray(children))
    return (
        <div>111</div>
    )
}
export default ChildRen;
