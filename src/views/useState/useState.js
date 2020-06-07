import React, {useState} from 'react';
import './index.css'

const UseState = () => {
    let [count, setCount] = useState(0)
    let [obj, setObj] = useState({name: "张三", age: 20});
    let [arr, serArr] = useState([1, 2, 3]);
    let [func] = useState(() => {  //根据返回值确定状态值的类型
        // return 1
        return {name: '王麻子'}
    });
    /*该变状态值*/
    const changeNum = () => {
        //如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值
        setCount((value) => value + 3)
    };
    //改变对象
    const changeObj = () => {
        // setObj({name: "李四", age: 30}) //必须是一个新的对象
        setObj((prevState) => {
            return {...prevState, ...{age: 5000}}
        })
    };
    //改变数组
    const changeArr = () => {
        serArr(() => {
            arr.push(4);
            return [...arr]
        })
    };
    return (
        <div>
            <div>
                <h1>useState</h1>
                <p> 数值：{count}</p>
                <p> 对象：{obj.name}----年龄{obj.age}</p>
                <p> 数组：{arr}</p>
                <p>函数：{func.name}</p>
            </div>
            <button onClick={changeNum}>NUM</button>
            <button onClick={changeObj}>OBG</button>
            <button onClick={changeArr}>ARR</button>
        </div>
    );
};

export default UseState;