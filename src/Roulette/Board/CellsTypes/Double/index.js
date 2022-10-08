import React from 'react';
import { Border } from "./style";

const Double = ({ text, bgColor, disabled }) => {
    return (
        <Border bgColor={bgColor} disabled={disabled}>
            <div style={{transform: "rotate(90deg)", whiteSpace: "nowrap"}}>{text}</div>
        </Border>
    );
};

export default Double;