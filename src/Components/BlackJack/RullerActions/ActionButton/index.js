import React from 'react';
import { getMoneyBet, setMoneyBet, resetMoneyOnBlackJackTable, splitPrizes } from "./../../Calculator"
import { Button } from "./style";
import { notifyError, notifyInfo } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../Utils/messages"
import { clearBetsOnBlackJackTable, tableIsEmpty, betPlaceIsEmpty } from "./../../Calculator"
import { useDispatch, useSelector } from 'react-redux'
import { increaseMyMoney, decreaseMyMoney } from '../../../../Redux/Reducers/myMoneyReducer';
import { setHiding } from '../../../../Redux/Reducers/dealerStatesReducer';
import { setSpinBackColor, resetAllColors } from '../../../../Redux/Reducers/backColorReducer';
import { getNextTurn, oredrPlayers } from '../../../../Redux/Reducers/turnPlayReducer';
import { setRullerActions } from '../../../../Redux/Reducers/rullerActionsReducer';
import { addNewCardsToHand, resetCardsOnBlackJackTable, addCardsToDealer } from '../../../../Redux/Reducers/cardsHandsReducer';
import { resetChipsFromTable } from "./../../Utils/functions"
import { sumMyHand } from '../../Cards/functions';
import { SUM_PRIZE, HIT_ON_HIGH_NUMS } from "./../../Utils/messages"

const ActionButton = ({ buttonText }) => {
    const { currentPlayer, index, players } = useSelector((state) => state.turnPlay)
    const myMoney = useSelector((state) => state.myMoney.value)
    const { cardsOnTable } = useSelector((state) => state.cardsHands)
    const dispatch = useDispatch()
    const handleOnClick = () => {
        switch (buttonText) {
            case "Deal": {
                dispatch(setRullerActions("Playing"))
                giveFirstCards()
                dispatch(oredrPlayers())
                dispatch(addCardsToDealer())
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
                let myHand = sumMyHand(cardsOnTable[currentPlayer])
                if (myHand >= 21) {
                    dispatch(getNextTurn())
                    checkIfGameOver()
                    return
                }
                if (myHand > 17) {
                    if (window.confirm(HIT_ON_HIGH_NUMS)) {
                        dispatch(addNewCardsToHand(currentPlayer))
                    }
                } else {
                    dispatch(addNewCardsToHand(currentPlayer))
                }
                break;
            }
            case "Stand": {
                dispatch(getNextTurn())
                checkIfGameOver()
                break;
            }
            case "Double": {
                const currentSum = getMoneyBet(currentPlayer)
                if (currentSum <= myMoney) {
                    if (sumMyHand(cardsOnTable[currentPlayer]) > 17) {
                        if (window.confirm(HIT_ON_HIGH_NUMS)) {
                            dispatch(addNewCardsToHand(currentPlayer));
                        } else {
                            return
                        }
                    } else {
                        dispatch(addNewCardsToHand(currentPlayer));
                    }
                    setMoneyBet(currentPlayer, currentSum * 2)
                    dispatch(decreaseMyMoney(currentSum))
                    dispatch(getNextTurn())
                    checkIfGameOver()
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
                dispatch(resetAllColors())
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
                const sumOfDealerHand = sumMyHand(cardsOnTable["dealer"])
                if (sumOfMyHand <= 21) {
                    if (sumOfDealerHand > 21 || sumOfMyHand >= sumOfDealerHand) {
                        dispatch(setSpinBackColor({ state: "Win", id: hand }))
                        const currentPrize = splitPrizes(hand, sumOfMyHand === 21);
                        dispatch(increaseMyMoney(currentPrize));
                        notifyInfo(SUM_PRIZE(currentPrize, hand[hand.length - 1]));
                    } else {
                        dispatch(setSpinBackColor({ state: "Bust", id: hand }))
                    }
                } else {
                    dispatch(setSpinBackColor({ state: "Bust", id: hand }))
                }
            }
        })
    }
    const FinishGame = () => {
        dispatch(setHiding())
        dispatch(setRullerActions("GameOver"));
        checkWinners()
    }

    const checkIfGameOver = () => {
        if (players.length - 2 === index) {
            FinishGame()
        }
    }
    return (
        <Button onClick={handleOnClick} disabled={tableIsEmpty()}>
            {buttonText}
        </Button>
    );
};

export default ActionButton;