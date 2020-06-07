import React, {useReducer} from 'react';

const UseReducer = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'setName':
                return {
                    ...state,
                    name: action.name
                }
            case 'setAge':
                return {
                    ...state,
                    age: action.age
                }
            default:
                return state;
        }
    }, {name: "张三", age: 100});
    return (
        <div>
            <h1>useReducer</h1>
            <p>名字:{state.name} --- 年龄 {state.age}</p>
            <button style={{marginRight: 10}} onClick={()=>dispatch({type: 'setName', name: '盘驼背'})}>改变名字</button>
            <button onClick={()=>dispatch({type: 'setAge', age: '123'})}>改变年龄</button>
        </div>
    );
};

export default UseReducer;