const defaultValues = [
    { option: '0', style: { backgroundColor: 'green' } },
    { option: '32', style: { backgroundColor: 'red' } },
    { option: '15', style: { backgroundColor: 'black' } },
    { option: '19', style: { backgroundColor: 'red' } },
    { option: '4', style: { backgroundColor: 'black' } },
    { option: '21', style: { backgroundColor: 'red' } },
    { option: '2', style: { backgroundColor: 'black' } },
    { option: '25', style: { backgroundColor: 'red' } },
    { option: '17', style: { backgroundColor: 'black' } },
    { option: '34', style: { backgroundColor: 'red' } },
    { option: '6', style: { backgroundColor: 'black' } },
    { option: '27', style: { backgroundColor: 'red' } },
    { option: '13', style: { backgroundColor: 'black' } },
    { option: '36', style: { backgroundColor: 'red' } },
    { option: '11', style: { backgroundColor: 'black' } },
    { option: '30', style: { backgroundColor: 'red' } },
    { option: '8', style: { backgroundColor: 'black' } },
    { option: '23', style: { backgroundColor: 'red' } },
    { option: '10', style: { backgroundColor: 'black' } },
    { option: '5', style: { backgroundColor: 'red' } },
    { option: '24', style: { backgroundColor: 'black' } },
    { option: '16', style: { backgroundColor: 'red' } },
    { option: '33', style: { backgroundColor: 'black' } },
    { option: '1', style: { backgroundColor: 'red' } },
    { option: '20', style: { backgroundColor: 'black' } },
    { option: '14', style: { backgroundColor: 'red' } },
    { option: '31', style: { backgroundColor: 'black' } },
    { option: '9', style: { backgroundColor: 'red' } },
    { option: '22', style: { backgroundColor: 'black' } },
    { option: '18', style: { backgroundColor: 'red' } },
    { option: '29', style: { backgroundColor: 'black' } },
    { option: '7', style: { backgroundColor: 'red' } },
    { option: '28', style: { backgroundColor: 'black' } },
    { option: '12', style: { backgroundColor: 'red' } },
    { option: '35', style: { backgroundColor: 'black' } },
    { option: '3', style: { backgroundColor: 'red' } },
    { option: '26', style: { backgroundColor: 'black' } }
]
export let roulette = defaultValues
export const addBallToWinner = (place) => {
    roulette = roulette.map(result => {
        if (result.option === place) {
            return { ...result, option: `⚪${result.option}    ` }
        }
        return result
    })
}
export const resetValues = () => { roulette = defaultValues }
export const getPrizeNumber = (place) => {
    if(place) return roulette[parseInt(place)].option
    if(place === 0) return roulette[0].option
}
export const getColor = (number) => defaultValues.find(value => value.option === number)?.style.backgroundColor