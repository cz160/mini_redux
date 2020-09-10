import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreates from '../../store/actionCreates';
class Home extends Component {
  render() {
    const { count,add,decrese } = this.props;
    return (
      <div>
          <Link to="/test" >去测试</Link>
          <div>当前Count:{count}</div>
          <button onClick={add}>+</button>
          <button onClick={decrese}>-</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count:state.count 
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: data => {
      dispatch(actionCreates.add(data))
    },
    decrese: data => {
      dispatch(actionCreates.decrese(data))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);