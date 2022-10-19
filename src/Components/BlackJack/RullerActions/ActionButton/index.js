import React from 'react';
import { getMoneyBet, setMoneyBet, resetMoneyOnBlackJackTable, splitPrizes } from "./../../Calculator"
import { Button } from "./style";
import { notifyError, notifyInfo } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../Utils/messages"
import { clearBetsOnBlackJackTable, tableIsEmpty, betPlaceIsEmpty } from "./../../Calculator"
import { useDispatch, useSelector } from 'react-redux'
import { increaseMyMoney, decreaseMyMoney } from '../../../../Redux/Reducers/myMoneyReducer';
import { setHiding } from '../../../../Redux/Reducers/dealerStatesReducer';
import { getNextTurn, oredrPlayers } from '../../../../Redux/Reducers/turnPlayReducer';
import { setRullerActions } from '../../../../Redux/Reducers/rullerActionsReducer';
import { addNewCardsToHand, resetCardsOnBlackJackTable, addCardsToDealer } from '../../../../Redux/Reducers/cardsHandsReducer';
import { resetChipsFromTable } from "./../../Utils/functions"
import { sumMyHand } from '../../Cards/functions';
import { SUM_PRIZE } from "./../../Utils/messages"

const ActionButton = ({ buttonText }) => {
    const { currentPlayer, index, players } = useSelector((state) => state.turnPlay)
    const myMoney = useSelector((state) => state.myMoney.value)
    const { cardsOnTable } = useSelector((state) => state.cardsHands)
    const dispatch = useDispatch()
    const handleOnClick = async () => {
        switch (buttonText) {
            case "Deal": {
                dispatch(setRullerActions("Playing"))
                giveFirstCards()
                dispatch(oredrPlayers())
                break
            }
            case "Clear": {
                const sumToReturn = clearBetsOnBlackJackTable();
                dispatch(increaseMyMoney(sumToReturn))
                resetChipsFromTable()
                dispatch(setRullerActions("Starting"))
                break
            }
            case "Hit": {
                dispatch(addNewCardsToHand(currentPlayer));
                break;
            }
            case "Stand": {
                dispatch(getNextTurn())
                if (players.length - 2 === index) {
                    FinishGame()
                }
                break;
            }
            case "Double": {
                const currentSum = getMoneyBet(currentPlayer)
                if (currentSum <= myMoney) {
                    dispatch(addNewCardsToHand(currentPlayer));
                    setMoneyBet(currentPlayer, currentSum * 2)
                    dispatch(decreaseMyMoney(currentSum))
                    dispatch(getNextTurn())
                    if (players.length - 2 === index) {
                        FinishGame()
                    }
                } else {
                    notifyError(NOT_HAVE_ENOUGH_MONEY)
                }
                break;
            }

            case "New Bet": {
                dispatch(resetCardsOnBlackJackTable())
                dispatch(setRullerActions("Starting"))
                resetMoneyOnBlackJackTable()
                resetChipsFromTable()
                dispatch(setHiding())
                break;
            }
            default: { }

        }
    }
    const giveFirstCards = () => {
        ["place_button_1", "place_button_2", "place_button_3", "dealer"].forEach(hand => {
            if (!betPlaceIsEmpty(hand)) {
                dispatch(addNewCardsToHand(hand));
                dispatch(addNewCardsToHand(hand));
            }
        })
    }
    const checkWinners = () => {
        ["place_button_1", "place_button_2", "place_button_3"].forEach((hand) => {
            if (!betPlaceIsEmpty(hand)) {
                const sumOfMyHand = sumMyHand(cardsOnTable[hand])
                if (sumOfMyHand <= 21) {
                    if (sumOfMyHand >= sumMyHand(cardsOnTable["dealer"])) {
                        const currentPrize = splitPrizes(hand, sumOfMyHand === 21);
                        dispatch(increaseMyMoney(currentPrize));
                        notifyInfo(SUM_PRIZE(currentPrize));
                    }
                }

            }
        })
    }
    const FinishGame = () => {
        dispatch(setHiding())
        dispatch(setRullerActions("GameOver"));
        dispatch(addCardsToDealer())
        checkWinners()
    }
    return (
        <Button onClick={handleOnClick} disabled={tableIsEmpty()}>
            {buttonText}
        </Button>
    );
};

export default ActionButton;