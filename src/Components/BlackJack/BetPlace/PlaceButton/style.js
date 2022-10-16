import styled from "styled-components"

export const GeneralDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BetButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    background-color: transparent;
    border: 3px solid black;
`;
export const BetSumDiv = styled.div`
    text-align: center;
    width: 80px;
    height: 25px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 15%;
    font-size: large;
`; 