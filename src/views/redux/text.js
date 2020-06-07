import React, {useContext} from 'react';
import {ReduxContext} from "./redux";


const Text = () => {
    let {state, dispatch} = useContext(ReduxContext);
    return (
        <div>
            <h1>tex1</h1>
            <p>名字=----{state.name}-年龄-----{state.age}</p>
            <button onClick={() => {
                dispatch({type: "name", name: 'text1'})
            }}>改变名字
            </button>
            <button
                onClick={() => {
                    dispatch({type: "age", age: 300})
                }}
            >改变年龄
            </button>
        </div>
    );
};

export default Text;