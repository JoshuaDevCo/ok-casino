import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import { roulette } from "./rouletteOptions"
import { GeneralDiv, SpinButton } from "./style"

const Spinner = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(null)
    const handleStartSpinnig = () => {
        const result = Math.floor((Math.random() * (roulette.length - 1)) + 1)
        setPrizeNumber(result)
        setMustSpin(true)
    }
    const handleFinishSpinnig = () => {
        setMustSpin(false)
    }
    return (
        <GeneralDiv>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
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