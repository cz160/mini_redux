import React from 'react';

function areEqual(prevProps,nextProps){
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}
const Memo = React.memo(function Memo(props){
    console.log('我被渲染了');
    return (
        <div>{props.title.a}</div>
    )
},areEqual)
export default Memo;