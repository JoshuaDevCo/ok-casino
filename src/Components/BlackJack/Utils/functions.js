import { moneyOnTable } from "./../Calculator"

export const resetChipsFromTable = (idPlace) => {
    if (idPlace) {
        const element = document.getElementById(idPlace)
        if (moneyOnTable[idPlace] === 0) {
            element.innerHTML = "ADD BET"
        }
    } else {
        ["place_button_1", "place_button_2", "place_button_3"].forEach(idPlace => {
            const element = document.getElementById(idPlace)
            if (moneyOnTable[idPlace] === 0) {
                element.innerHTML = "ADD BET"
            }
        })
    }
}