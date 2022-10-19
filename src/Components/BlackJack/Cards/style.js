import styled from "styled-components"
import { cardsSetting } from "./functions"
import backCard from "./../../../Assets/back_card.png"

export const CardDiv = styled.div`
    position: relative;
    width: 55px;
    height: 80px;
    border-radius: 10%;
    background-color: white;
    color: ${props => cardsSetting[props.kind].color};
    font-weight: 600;
    border: 1px solid black;
`;

export const CardReverseDiv = styled.div`
    position: relative;
    width: 55px;
    height: 80px;
    border-radius: 10%;
    border: 1px solid black;
    background: ${`url(${backCard}) no-repeat center`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const Number = styled.p`
    position: absolute;
    margin: 0;
    margin-left: 4px;
    left: 0;
    top: 0;
    font-size: 35px;
`;
export const Icon = styled.p`
    position: absolute;
    margin: 0;
    right: 0;
    bottom: 0;
    font-size: 40px;
`;