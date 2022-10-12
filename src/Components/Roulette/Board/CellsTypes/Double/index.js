import React from 'react';
import { Border } from "./style";
import { moneyOnTable } from "./../../../Calculator"
import { useSelector, useDispatch } from 'react-redux'
import { decreaseMyMoney } from "./../../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "../../../Utils/messages"
import { getIconChip } from "./../../../MyMoney/Chips/style"

const Double = ({ number, text, bgColor, disabled }) => {
    const buttonName = `doubleButton${text}`;
    const { value, color } = useSelector((state) => state.chosenChip)
    const myMoney = useSelector((state) => state.myMoney.value)
    const dispatch = useDispatch()
    const handleOnClick = () => {
        if (value <= myMoney) {
            moneyOnTable[number] = moneyOnTable[number] + value;
            const element = document.getElementById(buttonName)
            element.innerHTML += `<img src="${getIconChip(color)}" style="height:35px; width:35px; position: absolute; padding-${(Math.random() * 1 > 0.7) ? 'top' : 'bottom'}: ${(Math.random() * 35)}px" />`
            dispatch(decreaseMyMoney(value))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }
    
    return (
        <Border id={buttonName} bgColor={bgColor} disabled={disabled || !color} onClick={handleOnClick}>
            <div style={{ transform: "rotate(90deg)", whiteSpace: "nowrap" }}>{text}</div>
        </Border>
    );
};

export default Double;