import React, { useState } from 'react';
import ChipsButtons from "./Chips"
import { GeneralDiv, MoneyLabel } from "./style";

const MyMoney = () => {
    const [myMoney, setMyMoney] = useState(1000)
    return (
        <GeneralDiv>
            <MoneyLabel>{`My Wallet: ${myMoney}$`}</MoneyLabel>
            <ChipsButtons />
        </GeneralDiv>
    );
};

export default MyMoney;