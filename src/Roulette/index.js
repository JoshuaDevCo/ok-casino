import React from 'react';
import Board from "./Board";
import Spinner from "./Spinner";
import MyMoney from "./MyMoney";
import { GeneralDiv } from "./style";

const Roulette = () => {

    return (
        <GeneralDiv>
            <MyMoney />
            <Board />
            <Spinner />
        </GeneralDiv>
    );
};

export default Roulette;