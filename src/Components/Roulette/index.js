import React from 'react';
import Board from "./Board";
import Spinner from "./Spinner";
import MyMoney from "./MyMoney";
import History from "./History";
import { GeneralDiv, InteriorDiv } from "./style";

const Roulette = () => {

    return (
        <GeneralDiv>
            <InteriorDiv>
                <MyMoney />
                <Board />
                <Spinner />
                <History />
            </InteriorDiv>
        </GeneralDiv>
    );
};

export default Roulette;