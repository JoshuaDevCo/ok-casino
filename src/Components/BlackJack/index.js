import React from 'react';
import { GeneralDiv, InteriorDiv } from "./style";
import MyMoney from "./../Common/MyMoney/index";
import Card from "./Cards"

const BlackJack = () => {
    return (
        <GeneralDiv>
            <InteriorDiv>
                <MyMoney />
            </InteriorDiv>
        </GeneralDiv>
    );
};

export default BlackJack;