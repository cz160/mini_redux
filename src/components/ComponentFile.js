import React, { Fragment } from 'react';

class ComponentFile extends React.Component{
    // 挂载阶段
    constructor(props){
        super(props);
        this.state = {
            currentValue:1,
        }
    }
    componentDidMount(){
        console.log('-----------------componentDidMount被调用,初始化结束-------------------------');
    }
    // 公共
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps被调用');
        return state;
    }
    render(){
        console.log('render被调用'); 
        const { currentValue } = this.state;
        return (
            <Fragment>
                <h1>{currentValue}</h1>
                <button onClick={()=>this.UpdatecurrentValue('add')}>加1</button>
                <button onClick={()=>this.UpdatecurrentValue('decrese')}>减1</button>
            </Fragment>
        )
    }
    // 更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    } 
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('-----------------componentDidMount被调用,更新结束-------------------------');
    }
    // 卸载
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    // 错误处理
    UpdatecurrentValue = (type)=>{
        this.setState((state)=>{
            const { currentValue } = state;
            const newCurrentValue = (type === 'add') ? currentValue+1 : currentValue-1;
            return {
                currentValue:newCurrentValue,
            }
        })
    }
}

export default ComponentFile;
