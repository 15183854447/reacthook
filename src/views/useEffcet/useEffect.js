/**
 * @Description:
 * @author 15183854447 <33994091+15183854447@users.noreply.github.com>
 * @date 2020/6/7
 *useEffect
 * 1.componentDidMount\componentDidUpdate\componentwillUnMount
 * 2.副作用（Dom操作，数据请求、组件更新）
 * 3.useEffect 为什么在组件的内部执行？可以获取props,state,采用闭包的形式
 * 4.无阻塞更新
 * 5.useEffect(函数，数组（可以省略）)
 * 6.可以存在多个useEffcet
 *
 */


import React, {useState, useEffect} from 'react';


const UseEffect = () => {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log('componentDidMount')
    });

    useEffect(() => {
        console.log('componentDidMount');
        //组件卸载
        return () => {
            console.log('componentwillUnMount')
        }
    }, []); //当[] 只执行一次
    // 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值。
    // 尽管传入 [] 作为第二个参数有点类似于 componentDidMount 和 componentWillUnmount 的思维模式，
    // 但我们有 更好的 方式 来避免过于频繁的重复调用 effect。
    // 除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得处理额外操作很方便。

    useEffect(() => {
        console.log('componentDidUpdate')
    }, [count]);
    return (
        <div>
            <h1>useEffect</h1>
            <p style={{color: "red", fontSize: 20}}>{count}</p>
            <button onClick={() => {
                setCount(count++)
            }}>
                点击
            </button>
        </div>
    );
};

export default UseEffect;