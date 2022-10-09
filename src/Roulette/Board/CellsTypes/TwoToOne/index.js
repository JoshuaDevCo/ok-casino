import React from 'react';
import { Border } from "./style";
import { useSelector, useDispatch } from 'react-redux'
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../../../Utils/messages"
import { moneyOnTable } from "./../../../../Calculator/index"

const TwoToOne = ({ number, bgColor, indent, disabled }) => {
    const chosenChipValue = useSelector((state) => state.chosenChip.value)
    const myMoney = useSelector((state) => state.myMoney.value)
    const dispatch = useDispatch()

    const handleOnClick = () => {
        if (chosenChipValue <= myMoney) {
            moneyOnTable[number] = moneyOnTable[number] + chosenChipValue;
            dispatch(decreaseMyMoney(chosenChipValue))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }
    return (
        <Border bgColor={bgColor} indent={indent} disabled={disabled} onClick={handleOnClick}>
            2 to 1
        </Border>
    );
};

export default TwoToOne;