import React from 'react';
import Board from "./Board";
import Spinner from "./Spinner";
import { GeneralDiv } from "./style";

const Roulette = () => {

    return (
        <GeneralDiv>
            <Board />
            <Spinner />
        </GeneralDiv>
    );
};

export default Roulette;