/**
 * @Description:
 * @author 15183854447 <33994091+15183854447@users.noreply.github.com>
 * @date 2020/6/7
 *
 * shouldComponentUpdate 类似的作用。避免重复的渲染
 *
 * userMemo 就是用 Memoization 来提高新能的
 *
 * Memoization是JavaScript中的一种缓存技术，通过缓存结果并在下一个操作中重新使用缓存来加速查找费时的操作。
 * 在这里，我们将看到memoization的用法以及它如何帮助优化应用的性能。
 *
 * useMemo 是一个函数   useMemo(fn,[默认可以不写])
 *
 * useMemo和useEffect执行的时间不同，useEffect是在componentDidMount以后执行 useMemo 在渲染的过程中执行
 *
 *
 */

import React, {useState, useMemo, useEffect} from 'react';

const Memo = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect==============');
    });
    const res = useMemo(() => {
        console.log('useMemo---------------');
        return count
    }, []);
    return (
        <div>
            <h1>useMemo</h1>
            <p>{res}----{count}</p>
            <button onClick={() => setCount((s) => s + 10)}>更新</button>
        </div>
    );
};

export default Memo;