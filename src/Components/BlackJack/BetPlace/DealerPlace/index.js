import React from 'react';
import Card from "./../../Cards"
import { getHandCards, getDealerCardsInHiding } from "./../../Calculator"
import { sumMyHand } from "./../../Cards/functions"
import { GeneralDiv, CardsDeck, CardsSum } from "./style"
import { useSelector } from "react-redux"
const ID = "dealer"

const DealerPlace = () => {
    const myHand = getHandCards(ID)
    const isDealerHide = useSelector((state) => state.dealerStates)

    const getHidingCards = () => {
        let first = true;
        return myHand.map(({ number, kind }) => {
            if (first) {
                first = false;
                return <Card number={number} kind={kind} key={number + kind + Date.now()} />
            }
            return <Card number={number} kind={kind} key={number + kind + Date.now()} isReverse={true} />
        })
    }
    return (
        <GeneralDiv>
            <>
                <CardsSum>
                    {
                        isDealerHide ?
                            sumMyHand(getDealerCardsInHiding()) :
                            sumMyHand(myHand)
                    }
                </CardsSum>
                <CardsDeck>
                    {
                        isDealerHide ?
                            getHidingCards():
                            myHand.map(({ number, kind }) => <Card number={number} kind={kind} key={number + kind + Date.now()} />)
                    }
                </CardsDeck>
            </>
        </GeneralDiv>
    );
};

export default DealerPlace;