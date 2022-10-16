const redNumbers = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3]
const blackNumbers = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26]
const firstCol = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]
const seconedCol = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]
const thirdCol = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
export let moneyOnTable = {}

export const splitPrizes = (prizeNumber) => {
    let sum = 0;
    for (const [key, value] of Object.entries(moneyOnTable)) {
        if (value === 0) continue;
        if (!isNaN(key)) {  // is a number
            if (key === prizeNumber) sum += value * 36
        }
        else { // is not a number
            const intPrizeNumber = parseInt(prizeNumber);
            switch (key) {
                case "low": {
                    if (intPrizeNumber < 19) sum += value * 2
                    break
                }
                case "high": {
                    if (intPrizeNumber > 18) sum += value * 2
                    break
                }
                case "even": {
                    if (intPrizeNumber % 2 === 0 && prizeNumber !== "0") sum += value * 2
                    break
                }
                case "odd": {
                    if (intPrizeNumber % 2 !== 0) sum += value * 2
                    break
                }
                case "firstThird": {
                    if (intPrizeNumber < 13) sum += value * 3
                    break
                }
                case "seconedThird": {
                    if (intPrizeNumber < 25 && intPrizeNumber > 12) sum += value * 3
                    break
                }
                case "thirdThird": {
                    if (intPrizeNumber > 24) sum += value * 3
                    break
                }
                case "red": {
                    if (redNumbers.includes(intPrizeNumber)) sum += value * 2
                    break
                }
                case "black": {
                    if (blackNumbers.includes(intPrizeNumber)) sum += value * 2
                    break
                }
                case "firstCol": {
                    if (firstCol.includes(intPrizeNumber)) sum += value * 3
                    break
                }
                case "seconedCol": {
                    if (seconedCol.includes(intPrizeNumber)) sum += value * 3
                    break
                }
                case "thirdCol": {
                    if (thirdCol.includes(intPrizeNumber)) sum += value * 3
                    break
                }
                default: {}
            }
        }
    }
    return sum;
}

export const resetMoneyOnRouletteTable = () => {
    moneyOnTable = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "firstCol": 0,
        "seconedCol": 0,
        "thirdCol": 0,
        "low": 0,
        "high": 0,
        "red": 0,
        "black": 0,
        "odd": 0,
        "even": 0,
        "firstThird": 0,
        "seconedThird": 0,
        "thirdThird": 0,
    }
}