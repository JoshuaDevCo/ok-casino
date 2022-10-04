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
    border: 1px solid ${props => props.winning ? "yellow" : "white"};
    cursor: pointer;
`;