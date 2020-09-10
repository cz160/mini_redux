import React,{ Fragment } from 'react';
import { render } from '@testing-library/react';

function Hoc(WrappedComponent,data){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data:data,
            }
        }
        /// ... 复用逻辑
        render(){
            return (
                <WrappedComponent data={this.state.data} {...this.props} />
            )
        }
    }
}
export default Hoc;
