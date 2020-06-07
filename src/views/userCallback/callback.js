/**
 * @Description:
 * @author 15183854447 <33994091+15183854447@users.noreply.github.com>
 * @date 2020/6/7
 *
 * userCallback
 * 1.避免组件的重复渲染
 *
 * useMemo useCallback
 * 同样用到的是缓存技术， useCallback 缓存的是一个函数，函数可以执行
 * useCallback(fn，[可以不写])
 *
 *
 */
import React, {useState,useCallback} from 'react';

const Callback = () => {
    const [count, setCount] = useState(100);
    let callback = useCallback(() => {
        console.log('useCallback');
        console.log(count)
        return count;

    },[]);
    return (
        <div>
            <h1>useCallback</h1>
            <p>{count}</p>
            <p>返回的值：{callback()}</p>
            <button
                onClick={() => {
                    setCount((c) => c + 20)
                }}
            >改变
            </button>
        </div>
    );
};

export default Callback;