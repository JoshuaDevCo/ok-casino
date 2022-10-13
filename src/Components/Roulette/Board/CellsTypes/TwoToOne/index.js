import React from 'react';
import { Border } from "./style";
import { useSelector, useDispatch } from 'react-redux'
import { decreaseMyMoney } from "./../../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "../../../Utils/messages"
import { moneyOnTable } from "./../../../Calculator"
import { getIconChip } from "./../../../../Common/MyMoney/Chips/style"

const TwoToOne = ({ number, text, bgColor, indent, disabled }) => {
    const { value, color } = useSelector((state) => state.chosenChip)
    const myMoney = useSelector((state) => state.myMoney.value)
    const dispatch = useDispatch()
    const handleOnClick = () => {
        if (value <= myMoney) {
            moneyOnTable[number] = moneyOnTable[number] + value;
            const element = document.getElementById(number + text)
            element.innerHTML += `<img src="${getIconChip(color)}" style="height:30px; width:30px; position: absolute; padding-${(Math.random() * 2 > 1) ? 'right' : 'left'}: ${(Math.random() * 25)}px" />`
            dispatch(decreaseMyMoney(value))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }
    return (
        <Border id={number + text} bgColor={bgColor} indent={indent} disabled={disabled || !color} onClick={handleOnClick}>
            {text}
        </Border>
    );
};

export default TwoToOne;