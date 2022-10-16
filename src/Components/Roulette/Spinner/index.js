import React from 'react';
import { Wheel } from 'react-custom-roulette'
import { roulette, addBallToWinner, resetValues, getPrizeNumber } from "./rouletteOptions"
import { spinNewPrizeNumber } from "../../../Redux/Reducers/prizeNumberReducer"
import { setSpin } from "../../../Redux/Reducers/spinReducer"
import { useSelector, useDispatch } from 'react-redux'
import { GeneralDiv, SpinButton } from "./style"
import { splitPrizes, resetMoneyOnRouletteTable } from "./../Calculator"
import { increaseMyMoney } from "./../../../Redux/Reducers/myMoneyReducer"
import { addNewResult } from "./../../../Redux/Reducers/historyRouletteResultsReducer"
import { resetMoneyImgFromTable } from "../Utils/functions"
import { NONE_PRIZE, NO_MORE_BETS, SUM_PRIZE } from "../Utils/messages"
import { notifyWarn, notifyInfo } from "../../../Utils/toasts"

const Spinner = () => {
    const currentPrizeNumber = useSelector((state) => state.prizeNumber.value)
    const realPrizeNumber = getPrizeNumber(currentPrizeNumber)
    const isSpin = useSelector((state) => state.isSpin.value)
    const dispatch = useDispatch()

    const handleStartSpinnig = () => {
        resetValues()
        dispatch(spinNewPrizeNumber())
        dispatch(setSpin())
        notifyWarn(NO_MORE_BETS)
    }

    const handleFinishSpinnig = () => {
        addBallToWinner(realPrizeNumber)
        dispatch(addNewResult(realPrizeNumber))
        const prize = splitPrizes(realPrizeNumber)
        if(prize > 0)
            notifyInfo(SUM_PRIZE(prize))
        else
            notifyInfo(NONE_PRIZE)
        dispatch(increaseMyMoney(prize))
        resetMoneyOnRouletteTable()
        resetMoneyImgFromTable()
        dispatch(setSpin())
    }

    return (
        <GeneralDiv>
            <Wheel
                mustStartSpinning={isSpin}
                prizeNumber={currentPrizeNumber}
                data={roulette}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                radiusLineColor={"#d99d1a"}
                radiusLineWidth={3}
                innerRadius={45}
                innerBorderColor={"#33250d"}
                innerBorderWidth={20}
                outerBorderColor={"black"}
                outerBorderWidth={15}
                textDistance={80}
                spinDuration={2.0}
                onStopSpinning={() => handleFinishSpinnig()}
            />
            <SpinButton onClick={() => handleStartSpinnig()} disabled={isSpin}>
                SPIN!
            </SpinButton>
        </GeneralDiv>
    );
};

export default Spinner;