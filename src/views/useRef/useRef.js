/**
 * @Description:
 * @author 15183854447 <33994091+15183854447@users.noreply.github.com>
 * @date 2020/6/7
 * useRef
 * 获取DOM元素和保存变量
 */
import React, {useRef} from 'react';

const UseRef = () => {
    let inputRef = useRef();
//获取Dom元素
    const focusInput = () => {
        console.log(inputRef)
        console.log(inputRef.current) //Dom元素
        inputRef.current.focus()
        inputRef.current.value = 'absdad'


    };
    //保存变量
    const savevariate = () => {
        inputRef.current.zhangan = '121321231'
        console.log(inputRef)
    };
    return (
        <div>
            <h1>useRef</h1>
            <input ref={inputRef} type="text"/>
            <p>
                <button style={{marginRight: 10}} onClick={focusInput}>失去焦点</button>
                <button onClick={savevariate}>保存变量</button>
            </p>
        </div>
    );
};

export default UseRef;