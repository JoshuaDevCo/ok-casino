import React from 'react';
import Board from "./Board";
import Spinner from "./Spinner";
import MyMoney from "./MyMoney";
import { GeneralDiv, InteriorDiv, TitleGame } from "./style";
import { ROULETTE_TITLE } from "./../Utils/constants"

const Roulette = () => {

    return (
        <GeneralDiv>
            <TitleGame>{ROULETTE_TITLE}</TitleGame>
            <InteriorDiv>
                <MyMoney />
                <Board />
                <Spinner />
            </InteriorDiv>
        </GeneralDiv>
    );
};

export default Roulette;