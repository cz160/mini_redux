import React from 'react';

function CreateElement(){
    const ele = React.createElement('span',{ 
        className:'red',
        attr:{test:1},
        key:'cz'
    },['111']);
    const ele1 = React.cloneElement(ele,{
        b:'222',
    },['2222'])
    console.log(React.isValidElement(ele1))
    console.log(ele1)
    return (
        <div>{ele1}</div>
    )
}
export default CreateElement;
