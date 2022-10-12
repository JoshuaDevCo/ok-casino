import React from 'react';
import rouletteIcon from "./../../Assets/roulette_icon_game.jpg"
import blackjackIcon from "./../../Assets/blackjack_icon_game.png"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { GeneralDiv, Title, GameButton, InteriorDiv, MoneyLabel } from "./style";
import { TITLE } from "./utils"

const Home = () => {
    const myMoney = useSelector((state) => state.myMoney.value)

    const games = [
        { name: "Roulette", icon: rouletteIcon },
        { name: "BlackJack", icon: blackjackIcon }
    ]
    return (
        <GeneralDiv>
            <Title>
                {TITLE}
            </Title>
            <MoneyLabel>{`My Wallet: ${myMoney}$`}</MoneyLabel>
            <InteriorDiv>
                {
                    games.map(({ name, icon }) =>
                        <Link to={`/${name}`}>
                            <GameButton icon={icon} />
                        </Link>
                    )
                }
            </InteriorDiv>
        </GeneralDiv>
    );
};

export default Home;