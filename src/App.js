import React from 'react';
import './App.css';

import CHANGEState from "./views/useState/useState";
import Effect from "./views/useEffcet/useEffect";
import Ref from './views/useRef/useRef'
import Context from './views/useContext/parent'
import Reducer from './views/useReducer/useReducer'
import Reduxs from "./views/redux/index";
import Memo from "./views/userMemo/memo";
import Callback from "./views/userCallback/callback";
function App() {
    return (
        <div className="App" style={{marginBottom:120}}>
            <CHANGEState></CHANGEState>
            <Effect></Effect>
            <Ref></Ref>
            <Context></Context>
            <Reducer></Reducer>
            <Reduxs></Reduxs>
            <Memo></Memo>
            <Callback></Callback>
        </div>
    );
}

export default App;
