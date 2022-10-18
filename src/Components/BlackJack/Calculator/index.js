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


export const getMoneyBet = (id) => {
    return moneyOnTable[id];
}