export const fullDeck = [
    { number: "A", kind: "Heart" },
    { number: "A", kind: "Diamond" },
    { number: "A", kind: "Club" },
    { number: "A", kind: "Spade" },
    { number: "2", kind: "Heart" },
    { number: "2", kind: "Diamond" },
    { number: "2", kind: "Club" },
    { number: "2", kind: "Spade" },
    { number: "3", kind: "Heart" },
    { number: "3", kind: "Diamond" },
    { number: "3", kind: "Club" },
    { number: "3", kind: "Spade" },
    { number: "4", kind: "Heart" },
    { number: "4", kind: "Diamond" },
    { number: "4", kind: "Club" },
    { number: "4", kind: "Spade" },
    { number: "5", kind: "Heart" },
    { number: "5", kind: "Diamond" },
    { number: "5", kind: "Club" },
    { number: "5", kind: "Spade" },
    { number: "6", kind: "Diamond" },
    { number: "6", kind: "Club" },
    { number: "6", kind: "Spade" },
    { number: "6", kind: "Heart" },
    { number: "7", kind: "Diamond" },
    { number: "7", kind: "Club" },
    { number: "7", kind: "Spade" },
    { number: "7", kind: "Heart" },
    { number: "8", kind: "Diamond" },
    { number: "8", kind: "Club" },
    { number: "8", kind: "Spade" },
    { number: "8", kind: "Heart" },
    { number: "9", kind: "Diamond" },
    { number: "9", kind: "Club" },
    { number: "9", kind: "Spade" },
    { number: "9", kind: "Heart" },
    { number: "10", kind: "Diamond" },
    { number: "10", kind: "Club" },
    { number: "10", kind: "Spade" },
    { number: "10", kind: "Heart" },
    { number: "J", kind: "Diamond" },
    { number: "J", kind: "Club" },
    { number: "J", kind: "Spade" },
    { number: "J", kind: "Heart" },
    { number: "Q", kind: "Diamond" },
    { number: "Q", kind: "Club" },
    { number: "Q", kind: "Spade" },
    { number: "Q", kind: "Heart" },
    { number: "K", kind: "Diamond" },
    { number: "K", kind: "Club" },
    { number: "K", kind: "Spade" },
    { number: "K", kind: "Heart" },
]

export const cardsSetting = {
    Heart: { color: "red", icon: "♥" },
    Diamond: { color: "red", icon: "♦" },
    Spade: { color: "black", icon: "♠" },
    Club: { color: "black", icon: "♣" },
}
export let currentDeck = fullDeck
export const getNextCard = () => { // BUG: to fix the random giving
    const length = currentDeck.length;
    if (length === 0) {
        currentDeck = fullDeck;
    }
    const chosenNum = Math.floor((Math.random() * (currentDeck.length)))
    const chosenCard = currentDeck[chosenNum]
    currentDeck.filter(({ number, kind }) => number !== chosenCard.number && kind !== chosenCard.kind)
    return chosenCard;
}

export const sumMyHand = (myCards) => {
    let sum = 0;
    let areAces = false;
    let allowReduceAce = true;
    console.log(myCards);
    myCards.forEach(({ number, kind }) => {
        switch (number) {
            case "K":
            case "Q":
            case "J":
                sum += 10
                break;
            case "A":
                if (areAces) {
                    sum += 1;
                } else {
                    areAces = true;
                    sum += 11;
                }
                break;
            default:
                sum += parseInt(number)
                break;
        }
        if (sum > 21 && areAces && allowReduceAce) {
            allowReduceAce = false;
            sum -= 10;
        }
    })
    return sum;
}