import React from 'react';
import { Border } from "./style";
import { useSelector, useDispatch } from 'react-redux'
import { getPrizeNumber } from "../../../Spinner/rouletteOptions"
import { extractPrizeNumber } from "./../../../../Utils/functions"
import { moneyOnTable } from "./../../../../Calculator/index"
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../../../Utils/messages"

const ZeroCell = ({ number, bgColor, disabled }) => {
    const currentPrizeNumber = useSelector((state) => state.prizeNumber.value)
    const realPrizeNumber = getPrizeNumber(currentPrizeNumber)
    const isSpin = useSelector((state) => state.isSpin.value)
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
        <Border bgColor={bgColor} winning={!isSpin && 0 === extractPrizeNumber(realPrizeNumber)} disabled={disabled} onClick={handleOnClick}>
            {number}
        </Border>
    );
};

export default ZeroCell;