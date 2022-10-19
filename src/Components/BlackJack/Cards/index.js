import React from 'react';
import { CardDiv, CardReverseDiv, Icon, Number } from "./style";
import { cardsSetting } from "./functions"

const Card = ({ number, kind, isReverse }) => {
    if (isReverse) {
        return (
            <CardReverseDiv kind={kind}>
            </CardReverseDiv>
        )
    }
    return (
        <CardDiv kind={kind}>
            <Number>{number}</Number>
            <Icon kind={kind}>{cardsSetting[kind].icon}</Icon>
        </CardDiv>
    );
};

export default Card;