import React from 'react';
import { getMoneyBet, setMoneyBet, resetMoneyOnBlackJackTable } from "./../../Calculator"
import { Button } from "./style";
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../Utils/messages"
import { clearBetsOnBlackJackTable, tableIsEmpty, betPlaceIsEmpty } from "./../../Calculator"
import { useDispatch, useSelector } from 'react-redux'
import { increaseMyMoney } from '../../../../Redux/Reducers/myMoneyReducer';
import { getNextTurn, oredrPlayers } from '../../../../Redux/Reducers/turnPlayReducer';
import { setRullerActions } from '../../../../Redux/Reducers/rullerActionsReducer';
import { addNewCardsToHand, resetCardsOnBlackJackTable } from '../../../../Redux/Reducers/cardsHandsReducer';
import { resetChipsFromTable } from "./../../Utils/functions"

const ActionButton = ({ buttonText }) => {
    const { currentPlayer } = useSelector((state) => state.turnPlay)
    const myMoney = useSelector((state) => state.myMoney.value)
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
                break
            }
            case "Double": {
                const currentSum = getMoneyBet(currentPlayer)
                if (currentSum <= myMoney) {
                    dispatch(addNewCardsToHand(currentPlayer));
                    setMoneyBet(currentPlayer, currentSum * 2)
                    dispatch(decreaseMyMoney(currentSum))
                    dispatch(getNextTurn())
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
    return (
        <Button onClick={handleOnClick} disabled={tableIsEmpty()}>
            {buttonText}
        </Button>
    );
};

export default ActionButton;