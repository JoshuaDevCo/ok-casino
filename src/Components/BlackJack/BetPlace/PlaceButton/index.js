import React from 'react';
import Card from "./../../Cards"
import { BET_PLACE_TEXT } from "./../constants"
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../Utils/messages"
import { getIconChip } from "./../../../Common/MyMoney/Chips/style"
import { moneyOnTable, getMoneyBet, betPlaceIsEmpty } from "./../../Calculator"
import { useSelector, useDispatch } from 'react-redux'
import { GeneralDiv, BetButton, BetSumDiv, CardsDeck, CardsSum, DownArrow } from "./style"
import { resetChipsFromTable } from "./../../Utils/functions"
import { setRullerActions } from '../../../../Redux/Reducers/rullerActionsReducer';
import { GAME_STATES } from "./../../Utils/states"
import { sumMyHand } from "./../../Cards/functions"

const PlaceButton = ({ id }) => {
    const { cardsOnTable } = useSelector((state) => state.cardsHands)
    const myHand = cardsOnTable[id]
    const { value, color } = useSelector((state) => state.chosenChip)
    const { currentPlayer } = useSelector((state) => state.turnPlay)
    const state = useSelector((state) => state.rullerActions)
    const myMoney = useSelector((state) => state.myMoney.value)
    const dispatch = useDispatch()
    const handleOnClick = (buttonName) => {
        if (value <= myMoney) {
            const element = document.getElementById(buttonName)
            resetChipsFromTable(buttonName)
            moneyOnTable[buttonName] = moneyOnTable[buttonName] + value;
            element.innerHTML += `<img src="${getIconChip(color)}" style="height:40px; width:40px; position: absolute; padding-${(Math.random() * 1 > 1) ? 'right' : 'left'}: ${(Math.random() * 30)}px" />`
            dispatch(decreaseMyMoney(value))
            dispatch(setRullerActions("Betting"))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }

    const noMoreBets = () => {
        return state.value === GAME_STATES.PLAYING || state.value === GAME_STATES.GAME_OVER
    }
    return (
        <GeneralDiv>
            {
                (!betPlaceIsEmpty(id) && state.value === GAME_STATES.PLAYING) ?
                    <>
                        {
                            currentPlayer === id &&
                            <DownArrow>⬇</DownArrow>

                        }
                        <CardsSum>{sumMyHand(myHand)}</CardsSum>
                        <CardsDeck>
                            {
                                myHand.map(({ number, kind }) => {
                                    return <Card number={number} kind={kind} key={number + kind + Date.now()} />
                                })
                            }
                        </CardsDeck>
                    </>
                    : null
            }
            <BetButton id={id} disabled={!color || noMoreBets()} onClick={() => handleOnClick(id)}>{BET_PLACE_TEXT}</BetButton>
            <BetSumDiv>{getMoneyBet(id)}</BetSumDiv>
        </GeneralDiv>
    );
};

export default PlaceButton;