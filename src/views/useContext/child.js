import React, {useContext} from 'react';
import {Mycontext} from "./Context";

const Child = () => {
    let count = useContext(Mycontext); //接收父组件的值
    return (
        <div>
            子组件接收到的父组件值{count}
        </div>
    );
};

export default Child;