# 从0开始手动实现redux
## 原生使用
1. 创建store 
~~~
let store = createStore(reducer,initState,applyMiddleware(...middleware))
分析：
    创建后从store上能拿到什么？
       getState() // 获取state
       dispatch() // 派发action,修改state
       subscribe() // 监听state变化
       replaceReducer // 替换reducer
    第三个参数有什么作用，中间件起到了什么作用？
       每一个中间件可以拿到 getState,dispatch等方法 -> 返回一个函数，这个函数接受next方法 -> 返回一个函数，接受action
       作用：是否是改装了一下dispatch方法。在原有的store的基础上生成了一个新的store
    需要实现：
        createStore -> 返回 { getState,dispatch,subscibe,replaceReducer }
        applyMiddleware(...middleware) => 返回一个函数，这个函数接受旧的createStore方法，返回新的newCreateStore
~~~
2. 合并Redecer
~~~
通常在实际使用中，我们会将reducer按模块拆分，最后利用combinReduders方法进行合并
combinReduders({
    reducer1,
    reducer2,
    ...
})
分析：
    此函数接受一个对象，每个key对应的value都是一个reducer函数，最后返回一个集成reducer
~~~
## 实现