import styled from "styled-components"


export const Border = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    height: 40px;
    width: 180px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.winning ? "yellow" : "white"};
    border-radius: 150px 150px 0px 0px;
    cursor: pointer;
`;