import React from 'react';
import { GeneralDiv } from "./style";
import MyMoney from "./../Common/MyMoney";
import BetPlace from "./BetPlace";

const BlackJack = () => {
    return (
        <GeneralDiv>
            <BetPlace />
            <MyMoney />
        </GeneralDiv>
    );
};

export default BlackJack;