import styled from "styled-components"


export const Border = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;    
    height: 40px;
    width: 60px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    background-color: ${props => props.bgColor};
    border: solid ${props => props.winning ? "4px yellow" : "1px white"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    ${props => props.winning && 'animation: blink 1s; animation-iteration-count: 10; @keyframes blink { 50% { border-color:#fff ;}}' }
`;