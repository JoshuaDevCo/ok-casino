import React from 'react';
import { Border } from "./style";

const NumCell = ({ Number, bgColor }) => {
    return (
        <Border bgColor={bgColor} >
            {Number}
        </Border>
    );
};

export default NumCell;