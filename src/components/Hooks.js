import React,{ 
    useState, 
    useEffect,
    useReducer,
    useMemo,
    useCallback,
    useRef,
} from 'react';
function reducer(state,action){
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
    }
}
export default function Hooks(){
    const [price,setPrice] = useState(0);
    const initialState = { count: 0 };
    const [state,dispatch] = useReducer(reducer,initialState);
    const inputEle = useRef(null);
    const prevCountRef = useRef();
    const getNum = useMemo(()=>{
        console.log('执行了1');
        return price+1;
    },[price]);
    const getNum1 = useCallback(()=>{
        console.log('执行了2');
        return price+1;
    },[price])
    useEffect(()=>{
        prevCountRef.current = state.count;
    },[state.count])
    const prevCount = prevCountRef.current;
    return (
        <>
            <div>Hooks篇</div>
            <h1>useState使用</h1>
            <div>{ state.count }</div>
            <div>总和:{ getNum }</div>
            <Child getNum={getNum1} />
            <button onClick={()=>{
                dispatch({
                    type:'increment'
                })
            }}>+</button>
            <button onClick={()=>{
                setPrice(price+1);
            }}>改变总和</button>
            <h1>useReducer</h1>
            <h1>useRef使用</h1>
            <input type="text" ref={inputEle}></input>
            <button onClick={()=>{
                inputEle.current.focus();
            }}>Focus the input</button>
            <h1>获取上一轮的props</h1>
            <h1>Now: {state.count}, before: {prevCount}</h1>;
        </>
    )
}
const Child = React.memo(function ({ getNum }) {
    return <h4>总和：{getNum()}</h4>
})