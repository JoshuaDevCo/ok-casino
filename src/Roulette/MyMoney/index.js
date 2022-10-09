import React, { useState } from 'react';
import ChipsButtons from "./Chips"
import { useSelector } from 'react-redux'
import { GeneralDiv, MoneyLabel } from "./style";

const MyMoney = () => {
    const myMoney = useSelector((state) => state.myMoney.value)
    return (
        <GeneralDiv>
            <MoneyLabel>{`My Wallet: ${myMoney}$`}</MoneyLabel>
            <ChipsButtons />
        </GeneralDiv>
    );
};

export default MyMoney;