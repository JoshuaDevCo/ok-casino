import React from 'react';
import Card from "./../../Cards"
import { v4 as uuidv4 } from 'uuid';
import { sumMyHand } from "./../../Cards/functions"
import { GeneralDiv, CardsDeck, CardsSum, DealerImg } from "./style"
import { useSelector } from "react-redux"
const ID = "dealer"

const DealerPlace = () => {
    const { hide } = useSelector((state) => state.dealerStates)
    const { cardsOnTable } = useSelector((state) => state.cardsHands)
    const myHand = cardsOnTable[ID]
    const getHidingCards = () => {
        let first = true;
        return myHand.map(({ number, kind }) => {
            if (first) {
                first = false;
                return <Card number={number} kind={kind} key={number + kind + uuidv4()} />
            }
            return <Card number={number} kind={kind} key={number + kind + uuidv4()} isReverse={true} />
        })
    }
    return (
        <GeneralDiv>
            <>
                <DealerImg />
                <CardsSum>
                    {
                        hide ?
                            sumMyHand([myHand[0]]) :
                            sumMyHand(myHand)
                    }
                </CardsSum>
                <CardsDeck>
                    {
                        hide ?
                            getHidingCards() :
                            myHand.map(({ number, kind }) => <Card number={number} kind={kind} key={number + kind + uuidv4()} />)
                    }
                </CardsDeck>
            </>
        </GeneralDiv>
    );
};

export default DealerPlace;