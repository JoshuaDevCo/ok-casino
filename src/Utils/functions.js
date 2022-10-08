export const extractPrizeNumber = (number) => {
    if(number && isNaN(number)){
        let result = number.slice(1)
        result = result.slice(0,-4)
        return result
    }
}