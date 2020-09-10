import React,{ Component } from 'react';
import store from './store';
import actionCreates from './store/actionCreates';
class App extends Component{
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    });
  }
  render(){
    const { Count,Test } = store.getState();
    return (
      <>
        <div>当前count:{ Count.count }---{Test.text}</div>
        <button onClick={()=>{
           const { dispatch } = store;
           dispatch(actionCreates.add())
        }}>+</button>
        <button onClick={()=>{
           const { dispatch } = store;
           dispatch({
             type:'updata'
           })
        }}>修改</button>
      </>
    )
  }
}

export default App;
