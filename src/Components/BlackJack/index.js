import React from 'react';
import { GeneralDiv } from "./style";
import MyMoney from "./../Common/MyMoney";
import BetPlace from "./BetPlace";
import RullerActions from "./RullerActions";

const BlackJack = () => {
    return (
        <GeneralDiv>
            <BetPlace />
            <MyMoney />
            <RullerActions />
        </GeneralDiv>
    );
};

export default BlackJack;