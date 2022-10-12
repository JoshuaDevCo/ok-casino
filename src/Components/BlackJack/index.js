import React from 'react';
import { GeneralDiv, InteriorDiv, TitleGame } from "./style";
import { BLACKJACK_TITLE } from "../Roulette/Utils/constants"

const BlackJack = () => {
    return (
        <GeneralDiv>
            <TitleGame>{BLACKJACK_TITLE}</TitleGame>
            <InteriorDiv>
                BlackJack
            </InteriorDiv>
        </GeneralDiv>
    );
};

export default BlackJack;