import React from 'react';
import { Border } from "./style";
import { moneyOnTable } from "./../../../../Calculator/index"
import { getPrizeNumber } from "../../../Spinner/rouletteOptions"
import { extractPrizeNumber } from "./../../../../Utils/functions"
import { useSelector, useDispatch } from 'react-redux'
import { decreaseMyMoney } from "./../../../../Redux/Reducers/myMoneyReducer"
import { notifyError } from "../../../../Utils/toasts"
import { NOT_HAVE_ENOUGH_MONEY } from "./../../../../Utils/messages"

const NumCell = ({ number, bgColor, disabled }) => {
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
        <Border disabled={disabled} bgColor={bgColor} winning={!isSpin && number === extractPrizeNumber(realPrizeNumber)} onClick={handleOnClick}>
            {number}
        </Border>
    );
};

export default NumCell;