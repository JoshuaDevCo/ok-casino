import React, { useState } from 'react';
import { GeneralDiv, ChipButton } from "./style";

const ChipsButtons = () => {
    const [chosenButton, setChosenButton] = useState(null)
    return (
        <GeneralDiv>
            <ChipButton id={"red"} chosenButton={chosenButton} onClick={() => setChosenButton("red")}/>
            <ChipButton id={"green"} chosenButton={chosenButton} onClick={() => setChosenButton("green")}/>
            <ChipButton id={"blue"} chosenButton={chosenButton} onClick={() => setChosenButton("blue")}/>
            <ChipButton id={"black"} chosenButton={chosenButton} onClick={() => setChosenButton("black")}/>
        </GeneralDiv>
    );
};

export default ChipsButtons;