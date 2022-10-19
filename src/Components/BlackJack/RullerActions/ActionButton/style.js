import styled from "styled-components"

export const Button = styled.button`
    margin-left: 20px;
    position: relative;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 100%;
    border-color: goldenrod;
    background-color: red;
    color: black;
    font-size: large;
    font-weight: 800;
    transform: translateY(-50%);
    top: 50%;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;