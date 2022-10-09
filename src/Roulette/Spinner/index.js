import React from 'react';
import { Wheel } from 'react-custom-roulette'
import { roulette, addBallToWinner, resetValues, getPrizeNumber } from "./rouletteOptions"
import { spinNewPrizeNumber } from "../../Redux/Reducers/prizeNumberReducer"
import { setSpin } from "../../Redux/Reducers/spinReducer"
import { useSelector, useDispatch } from 'react-redux'
import { GeneralDiv, SpinButton } from "./style"
import { splitPrizes, resetMoneyOnTable } from "./../../Calculator"
import { increaseMyMoney } from "./../../Redux/Reducers/myMoneyReducer"

const Spinner = () => {
    const currentPrizeNumber = useSelector((state) => state.prizeNumber.value)
    const realPrizeNumber = getPrizeNumber(currentPrizeNumber)
    const isSpin = useSelector((state) => state.isSpin.value)
    const dispatch = useDispatch()

    const handleStartSpinnig = () => {
        resetValues()
        dispatch(spinNewPrizeNumber())
        dispatch(setSpin())
    }

    const handleFinishSpinnig = () => {
        addBallToWinner(realPrizeNumber)
        const prize = splitPrizes(realPrizeNumber)
        dispatch(increaseMyMoney(prize))
        resetMoneyOnTable()
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
            <SpinButton onClick={() => handleStartSpinnig()}>
                SPIN!
            </SpinButton>
        </GeneralDiv>
    );
};

export default Spinner;