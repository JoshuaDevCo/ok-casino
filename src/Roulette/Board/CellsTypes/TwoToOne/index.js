import React from 'react';
import { Border } from "./style";

const TwoToOne = ({ bgColor, indent, disabled }) => {
    return (
        <Border bgColor={bgColor} indent={indent} disabled={disabled}>
            2 to 1
        </Border>
    );
};

export default TwoToOne;