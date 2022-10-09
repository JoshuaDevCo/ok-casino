import React from 'react';
import { Border } from "./style";
import { useSelector, useDispatch } from 'react-redux'
import { getPrizeNumber } from "../../../Spinner/rouletteOptions"
import { extractPrizeNumber } from "./../../../../Utils/functions"
import { moneyOnTable } from "./../../../../Calculator/index"
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../../../Utils/messages"
import { getIconChip } from "./../../../MyMoney/Chips/style"

const ZeroCell = ({ number, bgColor, disabled }) => {
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
            element.innerHTML += `<img src="${getIconChip(color)}" style="height:35px; width:35px; position: absolute; padding-${(Math.random() * 2 > 1) ? 'right' : 'left'}: ${(Math.random() * 100)}px" />`
            dispatch(decreaseMyMoney(value))
        } else {
            notifyError(NOT_HAVE_ENOUGH_MONEY)
        }
    }
    return (
        <Border id={buttonName} bgColor={bgColor} winning={!isSpin && 0 === extractPrizeNumber(realPrizeNumber)} disabled={disabled} onClick={handleOnClick}>
            {number}
        </Border>
    );
};

export default ZeroCell;