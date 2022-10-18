import React from 'react';
import { Button } from "./style";
import { clearBetsOnBlackJackTable } from "./../../Calculator"
import { useDispatch } from 'react-redux'
import { increaseMyMoney } from '../../../../Redux/Reducers/myMoneyReducer';
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
                break
            }
            default: { }

        }
    }
    return (
        <Button onClick={handleOnClick} >
            {buttonText}
        </Button>
    );
};

export default ActionButton;