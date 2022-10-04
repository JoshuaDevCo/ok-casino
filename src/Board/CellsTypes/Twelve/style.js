import styled from "styled-components"


export const Border = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;    
    height: 160px;
    width: 35px;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    background-color: ${props => props.bgColor};
    border: 1px solid white;
    cursor: pointer;
`;