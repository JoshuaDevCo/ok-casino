import React from 'react';
import { Button } from "./style";

const ActionButton = ({ buttonText }) => {
    const handleOnClick = () => {
        switch(buttonText){
            case "Deal": {
                
                break
            }
            default: {}
            
        }
    }
    return (
        <Button onClick={handleOnClick}>
            {buttonText}
        </Button>
    );
};

export default ActionButton;