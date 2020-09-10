import React,{ Fragment,forwardRef } from 'react';

const Ref = forwardRef((props,ref)=>{
    return (
        <Fragment>
            <div>ref例子</div>
            <input type="test" ref={ref}/>
            <button onClick={props.onClick}>{props.children}</button>
        </Fragment>
    )
})  
export default Ref;
