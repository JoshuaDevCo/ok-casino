import React from 'react';
import { Border } from "./style";

const TwoToOne = ({ bgColor, indent }) => {
    return (
        <Border bgColor={bgColor} indent={indent} >
            2 to 1
        </Border>
    );
};

export default TwoToOne;