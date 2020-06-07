import React, {useState} from 'react';
import {Mycontext} from "./Context";
import Child from "./child";

const Parent = () => {
    let [count, setCount] = useState(132);
    return (
        <Mycontext.Provider value={count}>
            <h1>useContext</h1>
            <p>父组件{count}</p>
            <button onClick={() => setCount((count) => count + 3)}>改变父组件的值</button>
            <Child></Child>
        </Mycontext.Provider>
    );
};

export default Parent;