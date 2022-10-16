import React from 'react';
import { GeneralDiv } from "./style";
import PlaceButton from "./PlaceButton"
import { PLACE_BUTTON_1, PLACE_BUTTON_2, PLACE_BUTTON_3 } from "./constants"

const BetPlace = () => {
    return (
        <GeneralDiv>
            <PlaceButton id={PLACE_BUTTON_1} />
            <PlaceButton id={PLACE_BUTTON_2} />
            <PlaceButton id={PLACE_BUTTON_3} />
        </GeneralDiv>
    );
};

export default BetPlace;