import React from 'react';
import { Button } from "./style";
import { clearBetsOnBlackJackTable, tableIsEmpty, betPlaceIsEmpty } from "./../../Calculator"
import { useDispatch, useSelector } from 'react-redux'
import { increaseMyMoney } from '../../../../Redux/Reducers/myMoneyReducer';
import { getNextTurn, oredrPlayers } from '../../../../Redux/Reducers/turnPlayReducer';
import { setRullerActions } from '../../../../Redux/Reducers/rullerActionsReducer';
import { addNewCardsToHand } from '../../../../Redux/Reducers/cardsHandsReducer';
import { resetChipsFromTable } from "./../../Utils/functions"

const ActionButton = ({ buttonText }) => {
    const { currentPlayer } = useSelector((state) => state.turnPlay)
    const dispatch = useDispatch()
    const handleOnClick = () => {
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
                break
            }
            case "Stand": {
                dispatch(getNextTurn())
                break
            }
            case "Double": {

                break
            }
            case "New Bet": {

                break
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