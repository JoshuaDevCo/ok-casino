import React from 'react';
import { GeneralDiv, RullerDiv } from "./style";
import { useSelector } from 'react-redux'
import ActionButton from "./ActionButton"

const RullerAction = () => {
    const { buttons } = useSelector((state) => state.rullerActions)
    return (
        <GeneralDiv>
            <RullerDiv>
                {
                    buttons.map(button => {
                        return <ActionButton buttonText={button} />
                    })
                }
            </RullerDiv>
        </GeneralDiv>
    );
};

export default RullerAction;