import { resetMoneyOnRouletteTable } from "./Components/Roulette/Calculator"
import { resetMoneyOnBlackJackTable } from "./Components/BlackJack/Calculator"

export default function initSystem() {
    resetMoneyOnRouletteTable()
    resetMoneyOnBlackJackTable()
}