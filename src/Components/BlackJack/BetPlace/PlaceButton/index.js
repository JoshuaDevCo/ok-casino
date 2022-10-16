import React from 'react';
import { BET_PLACE_TEXT } from "./../constants"
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../Utils/messages"
import { getIconChip } from "./../../../Common/MyMoney/Chips/style"
import { moneyOnTable, getMoneyBet } from "./../../Calculator"
import { useSelector, useDispatch } from 'react-redux'
import { GeneralDiv, BetButton, BetSumDiv } from "./style"

const PlaceButton = ({ id }) => {
    const { value, color } = useSelector((state) => state.chosenChip)
    const myMoney = useSelector((state) => state.myMoney.value)
    const dispatch = useDispatch()
    const handleOnClick = (buttonName) => {
        if (value <= myMoney) {
            const element = document.getElementById(buttonName)
            if (moneyOnTable[buttonName] === 0) {
                element.innerHTML = ""
            }
            moneyOnTable[buttonName] = moneyOnTable[buttonName] + value;
            element.innerHTML += `<img src="${getIconChip(color)}" style="height:40px; width:40px; position: absolute; padding-${(Math.random() * 1 > 1) ? 'right' : 'left'}: ${(Math.random() * 30)}px" />`
            dispatch(decreaseMyMoney(value))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }
    return (
        <GeneralDiv>
            <BetButton id={id} disabled={!color} onClick={() => handleOnClick(id)}>{BET_PLACE_TEXT}</BetButton>
            <BetSumDiv>{getMoneyBet(id)}</BetSumDiv>
        </GeneralDiv>
    );
};

export default PlaceButton;