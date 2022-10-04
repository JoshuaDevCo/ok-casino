import React from 'react';
import { Border } from "./style";

const Twelve = ({ text, bgColor }) => {
    return (
        <Border bgColor={bgColor} >
            <div style={{transform: "rotate(90deg)", whiteSpace: "nowrap"}}>{text}</div>
        </Border>
    );
};

export default Twelve;