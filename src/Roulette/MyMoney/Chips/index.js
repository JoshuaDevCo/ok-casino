import React from 'react';
import { GeneralDiv, ChipButton } from "./style";
import { useSelector, useDispatch } from 'react-redux'
import { setChosenChip } from "../../../Redux/Reducers/chosenChipReducer"

const ChipsButtons = () => {
    const chosenChipColor = useSelector((state) => state.chosenChip.color)
    const dispatch = useDispatch()

    return (
        <GeneralDiv>
            <ChipButton id={"red"} chosenButton={chosenChipColor} onClick={() => dispatch(setChosenChip("red"))} />
            <ChipButton id={"yellow"} chosenButton={chosenChipColor} onClick={() => dispatch(setChosenChip("yellow"))} />
            <ChipButton id={"green"} chosenButton={chosenChipColor} onClick={() => dispatch(setChosenChip("green"))} />
            <ChipButton id={"blue"} chosenButton={chosenChipColor} onClick={() => dispatch(setChosenChip("blue"))} />
            <ChipButton id={"black"} chosenButton={chosenChipColor} onClick={() => dispatch(setChosenChip("black"))} />
        </GeneralDiv>
    );
};

export default ChipsButtons;