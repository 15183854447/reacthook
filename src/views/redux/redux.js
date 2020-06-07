import React, {useReducer, createContext} from 'react';

export const ReduxContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: action.name
            };
        case 'age':
            return {
                ...state,
                age: action.age
            };
        default:
            return state
    }
};
const data = {name: "黄蕾", age: 18}; //初始数据

export const Redux = (props) => {
    let [state, dispatch] = useReducer(reducer, data);
    return (
        <ReduxContext.Provider value={{state, dispatch}}>
            {props.children}
        </ReduxContext.Provider>
    );
};

