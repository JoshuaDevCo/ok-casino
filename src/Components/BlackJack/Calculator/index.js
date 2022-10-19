export let moneyOnTable = {}

export const resetMoneyOnBlackJackTable = () => {
    moneyOnTable = {
        place_button_1: 0,
        place_button_2: 0,
        place_button_3: 0
    }
}

export const clearBetsOnBlackJackTable = () => {
    const sum = moneyOnTable.place_button_1 + moneyOnTable.place_button_2 + moneyOnTable.place_button_3
    moneyOnTable = {
        place_button_1: 0,
        place_button_2: 0,
        place_button_3: 0
    }
    return sum;
}

export const splitPrizes = (winningPlace, isBlackJack) => {
    const value = moneyOnTable[winningPlace]
    let sum = value;
    if (value !== 0) {
        if (isBlackJack) {
            sum += 1.5 * value;
        } else {
            sum += value
        }
    }
    return sum;
}

export const getMoneyBet = (id) => {
    return moneyOnTable[id];
}

export const setMoneyBet = (id, newAmount) => {
    moneyOnTable[id] = newAmount;
}

export const betPlaceIsEmpty = (id) => {
    return moneyOnTable[id] === 0;
}

export const tableIsEmpty = () => {
    return moneyOnTable.place_button_1 === 0 && moneyOnTable.place_button_2 === 0 && moneyOnTable.place_button_3 === 0
}

export const getGameTurns = () => {
    return (["place_button_1", "place_button_2", "place_button_3"].filter(placeId => !betPlaceIsEmpty(placeId))).concat(["dealer"])
}