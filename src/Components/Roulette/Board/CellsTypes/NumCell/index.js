import React from 'react';
import { Border } from "./style";
import { moneyOnTable } from "./../../../Calculator"
import { getPrizeNumber } from "../../../Spinner/rouletteOptions"
import { extractPrizeNumber } from "../../../Utils/functions"
import { useSelector, useDispatch } from 'react-redux'
import { decreaseMyMoney } from "./../../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "../../../Utils/messages"
import { getIconChip } from "./../../../../Common/MyMoney/Chips/style"

const NumCell = ({ number, bgColor, disabled }) => {
    const buttonName = `numCellButton${number}`;
    const currentPrizeNumber = useSelector((state) => state.prizeNumber.value)
    const realPrizeNumber = getPrizeNumber(currentPrizeNumber)
    const isSpin = useSelector((state) => state.isSpin.value)
    const { value, color } = useSelector((state) => state.chosenChip)
    const myMoney = useSelector((state) => state.myMoney.value)
    const dispatch = useDispatch()

    const handleOnClick = () => {
        if (value <= myMoney) {
            moneyOnTable[number] = moneyOnTable[number] + value;
            const element = document.getElementById(buttonName)
            element.innerHTML += `<img src="${getIconChip(color)}" style="height:40px; width:40px; position: absolute; padding-${(Math.random() * 1 > 1) ? 'right' : 'left'}: ${(Math.random() * 15)}px" />`
            dispatch(decreaseMyMoney(value))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }
    return (
        <Border id={buttonName} disabled={disabled || !color} bgColor={bgColor} winning={!isSpin && number === extractPrizeNumber(realPrizeNumber)} onClick={handleOnClick}>
            {number}
        </Border>
    );
};

export default NumCell;