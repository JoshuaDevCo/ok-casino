import { resetMoneyOnRouletteTable } from "./Components/Roulette/Calculator"
import { resetMoneyOnBlackJackTable, resetCardsOnBlackJackTable } from "./Components/BlackJack/Calculator"

export default function initSystem() {
    resetMoneyOnRouletteTable()
    resetMoneyOnBlackJackTable()
    resetCardsOnBlackJackTable()
}