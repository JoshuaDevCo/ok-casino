import styled from "styled-components"
import blackChip from "./../../../Assets/black_chip.png"
import redChip from "./../../../Assets/red_chip.png"
import yellowChip from "./../../../Assets/yellow_chip.png"
import greenChip from "./../../../Assets/green_chip.png"
import blueChip from "./../../../Assets/blue_chip.png"

const getIconChip = (color) => {
    switch(color){
        case "red":
            return redChip;
        case "yellow":
            return yellowChip;
        case "blue":
            return blueChip;
        case "black":
            return blackChip;
        case "green":
            return greenChip;  
        default:
            return blackChip;            
    }
}

export const GeneralDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ChipButton = styled.button`
    height: 50px;
    width: 50px;
    margin: 2px;
    padding: 5px;
    background: ${props => `url(${getIconChip(props.id)}) no-repeat center`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border: ${props => props.chosenButton === props.id ? "1px silver solid" : "none"};
    cursor: pointer;
`;