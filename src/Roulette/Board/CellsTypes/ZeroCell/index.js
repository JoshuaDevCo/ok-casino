import React from 'react';
import { Border } from "./style";
import { useSelector } from 'react-redux'
import { getPrizeNumber } from "../../../Spinner/rouletteOptions"
import { extractPrizeNumber } from "./../../../../Utils/functions"

const ZeroCell = ({ bgColor, disabled }) => {
    const currentPrizeNumber = useSelector((state) => state.prizeNumber.value)
    const realPrizeNumber = getPrizeNumber(currentPrizeNumber)
    const isSpin = useSelector((state) => state.isSpin.value)

    return (
        <Border bgColor={bgColor} winning={!isSpin && 0 === extractPrizeNumber(realPrizeNumber)} disabled={disabled}>
            0
        </Border>
    );
};

export default ZeroCell;