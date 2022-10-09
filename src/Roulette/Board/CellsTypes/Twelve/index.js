import React from 'react';
import { Border } from "./style";
import { moneyOnTable } from "./../../../../Calculator/index"
import { useSelector, useDispatch } from 'react-redux'
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../../../Utils/messages"

const Twelve = ({ number, text, bgColor, disabled }) => {
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
        <Border bgColor={bgColor} disabled={disabled} onClick={handleOnClick}>
            <div style={{transform: "rotate(90deg)", whiteSpace: "nowrap"}}>{text}</div>
        </Border>
    );
};

export default Twelve;