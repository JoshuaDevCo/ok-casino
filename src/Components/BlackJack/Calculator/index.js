import { getNextCard } from "./../Cards/functions"

export let moneyOnTable = {}
export let cardsOnTable = {}

export const resetMoneyOnBlackJackTable = () => {
    moneyOnTable = {
        place_button_1: 0,
        place_button_2: 0,
        place_button_3: 0
    }
}

export const resetCardsOnBlackJackTable = () => {
    cardsOnTable = {
        place_button_1: [],
        place_button_2: [],
        place_button_3: [],
        dealer: []
    }
}

export const clearBetsOnBlackJackTable = () => {
    const sum = moneyOnTable.place_button_1 + moneyOnTable.place_button_2 + moneyOnTable.place_button_3
    moneyOnTable = {
        place_button_1: 0,
        place_button_2: 0,
        place_button_3: 0
    }
    return sum
}

export const splitPrizes = (winningPlace, isBlackJack) => {
    let sum = 0;
    const value = moneyOnTable[winningPlace]
    if (value !== 0) {
        if (isBlackJack) {
            sum += 1.5 * value;
        } else {
            sum += value
        }
    }
    return sum;
}

export const giveFirstCards = () => {
    ["place_button_1", "place_button_2", "place_button_3", "dealer"].forEach(hand => {
        if (!betPlaceIsEmpty(hand)) {
            addNewCardsToHand(hand);
            addNewCardsToHand(hand);
        }
    })
}

export const getMoneyBet = (id) => {
    return moneyOnTable[id];
}

export const getHandCards = (id) => {
    return cardsOnTable[id];
}

export const addNewCardsToHand = (id) => {
    cardsOnTable[id].push(getNextCard());
}

export const betPlaceIsEmpty = (id) => {
    return moneyOnTable[id] === 0;
}


export const tableIsEmpty = () => {
    return moneyOnTable.place_button_1 === 0 && moneyOnTable.place_button_2 === 0 && moneyOnTable.place_button_3 === 0
}

export const getDealerCardsInHiding = () => {
    return [cardsOnTable.dealer[0]]
}