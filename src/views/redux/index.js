import React from 'react';
import {Redux} from './redux'
import Text from "./text";
import Text2 from "./text2";


const Index = () => {
    return (
        <div>
            <Redux>
                <h1>redux</h1>
                <Text></Text>
                <Text2></Text2>
            </Redux>
        </div>
    );
};

export default Index;