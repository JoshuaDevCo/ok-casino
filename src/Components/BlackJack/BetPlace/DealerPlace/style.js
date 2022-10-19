import styled from "styled-components"
import dealerImg from "./../../../../Assets/dealer.png"

export const GeneralDiv = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const CardsDeck = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const CardsSum = styled.div`
    text-align: center;
    width: 50px;
    height: 45px;
    border: 3px solid black;
    margin: 10px;
    border-radius: 25%;
    font-size: xx-large;
    font-weight: 700;
`;

export const DealerImg = styled.div`
    height: 170px;
    width: 170px;
    background: ${`url(${dealerImg}) no-repeat center`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;