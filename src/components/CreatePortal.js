import React,{ Fragment } from 'react';
import ReactDom from 'react-dom';

const CreatePortal = (props)=>{
    return ReactDom.createPortal(<div>我是根节点下面</div>,document.getElementById('root'));
}
export default CreatePortal;
