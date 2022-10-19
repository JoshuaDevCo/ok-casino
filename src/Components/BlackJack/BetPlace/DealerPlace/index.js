import React from 'react';
import Card from "./../../Cards"
import { sumMyHand } from "./../../Cards/functions"
import { GeneralDiv, CardsDeck, CardsSum, DealerImg } from "./style"
import { useSelector } from "react-redux"
const ID = "dealer"

const DealerPlace = () => {
    const isDealerHide = useSelector((state) => state.dealerStates)
    const { cardsOnTable } = useSelector((state) => state.cardsHands)
    const myHand = cardsOnTable[ID]
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
                <DealerImg />
                <CardsSum>
                    {
                        isDealerHide ?
                            sumMyHand([myHand[0]]) :
                            sumMyHand(myHand)
                    }
                </CardsSum>
                <CardsDeck>
                    {
                        isDealerHide ?
                            getHidingCards() :
                            myHand.map(({ number, kind }) => <Card number={number} kind={kind} key={number + kind + Date.now()} />)
                    }
                </CardsDeck>
            </>
        </GeneralDiv>
    );
};

export default DealerPlace;