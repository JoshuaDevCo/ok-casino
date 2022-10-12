import React from 'react';
import logo from "./../../Assets/not_found_bg.png"
import { GeneralDiv, LogoImage, Title } from "./style";
import { TITLE } from "./utils"

const NoPage = () => {
    return (
        <GeneralDiv>
            <Title>{TITLE}</Title>
            <LogoImage src={logo}></LogoImage>
        </GeneralDiv>
    );
};

export default NoPage;