import React from 'react';
import { GeneralDiv } from "./style";
import MyMoney from "./../Common/MyMoney";
import BetPlace from "./BetPlace";
import DealerPlace from "./BetPlace/DealerPlace";
import RullerActions from "./RullerActions";
import { GAME_STATES } from "./Utils/states"
import { useSelector } from 'react-redux'

const BlackJack = () => {
    const state = useSelector((state) => state.rullerActions)
    const needDealer = () => {
        return state.value === GAME_STATES.PLAYING || state.value === GAME_STATES.GAME_OVER
    }
    return (
        <GeneralDiv>
            {
                needDealer() &&
                <DealerPlace />
            }
            <BetPlace />
            <MyMoney />
            <RullerActions />
        </GeneralDiv>
    );
};

export default BlackJack;