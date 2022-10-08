import React from 'react';
import { Border } from "./style";
import { useSelector } from 'react-redux'
import { getPrizeNumber } from "../../../Spinner/rouletteOptions"
import { extractPrizeNumber } from "./../../../../Utils/functions"

const NumCell = ({ number, bgColor, disabled }) => {
    const currentPrizeNumber = useSelector((state) => state.prizeNumber.value)
    const realPrizeNumber = getPrizeNumber(currentPrizeNumber)
    const isSpin = useSelector((state) => state.isSpin.value)
    return (
        <Border disabled={disabled} bgColor={bgColor} winning={!isSpin && number === extractPrizeNumber(realPrizeNumber)}>
            {number}
        </Border>
    );
};

export default NumCell;