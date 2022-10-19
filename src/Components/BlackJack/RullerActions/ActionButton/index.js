import React from 'react';
import { Button } from "./style";
import { clearBetsOnBlackJackTable, tableIsEmpty } from "./../../Calculator"
import { useDispatch } from 'react-redux'
import { increaseMyMoney } from '../../../../Redux/Reducers/myMoneyReducer';
import { setRullerActions } from '../../../../Redux/Reducers/rullerActionsReducer';
import { resetChipsFromTable } from "./../../Utils/functions"

const ActionButton = ({ buttonText }) => {
    const dispatch = useDispatch()
    const handleOnClick = () => {
        switch (buttonText) {
            case "Deal": {

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

                break
            }
            case "Stand": {

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
    return (
        <Button onClick={handleOnClick} disabled={tableIsEmpty()}>
            {buttonText}
        </Button>
    );
};

export default ActionButton;