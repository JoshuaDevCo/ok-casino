import React from 'react';
import { Border } from "./style";

const ZeroCell = ({ bgColor }) => {
    return (
        <Border bgColor={bgColor} >
            0
        </Border>
    );
};

export default ZeroCell;