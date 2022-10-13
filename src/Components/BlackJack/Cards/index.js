import React from 'react';
import { CardDiv, Icon, Number } from "./style";
import { cardsSetting } from "./functions"

const Card = ({ number, kind }) => {
    return (
        <CardDiv kind={kind}>
            <Number>{number}</Number>
            <Icon kind={kind}>{cardsSetting[kind].icon}</Icon>
        </CardDiv>
    );
};

export default Card;