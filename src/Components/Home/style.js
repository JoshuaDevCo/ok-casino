import styled from "styled-components"

export const GeneralDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Title = styled.p`
    font-size: xxx-large;
    font-weight: 900;
`;

export const InteriorDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const GameButton = styled.button`
    height: 250px;
    width: 400px;
    margin: 10px;
    background: ${props => `url(${props.icon}) no-repeat center`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    cursor: pointer;
    border-radius: 20px;
`;

export const MoneyLabel = styled.p`
    font-size: xx-large;
    font-weight: 700;
`;