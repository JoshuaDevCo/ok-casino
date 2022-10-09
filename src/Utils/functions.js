export const extractPrizeNumber = (number) => {
    if (number && isNaN(number)) {
        let result = number.slice(1)
        result = result.slice(0, -4)
        return result
    }
}

export const resetMoneyImgFromTable = () => {
    // num cells
    Array.from(Array(37).keys()).forEach(element => {
        document.getElementById(`numCellButton${element}`).innerHTML = element
    });
    // doubles
    ["1 to 18", "19 to 36", "RED", "BLACK", "EVEN", "ODD"].forEach(element => {
        document.getElementById(`doubleButton${element}`).innerHTML = `<div style="transform: rotate(90deg); white-space: nowrap;">${element}</div>`
    });
    // twelves
    ["1st 12", "2nd 12", "3rd 12"].forEach(element => {
        document.getElementById(element).innerHTML = `<div style="transform: rotate(90deg); white-space: nowrap;">${element}</div>`
    });
    // 2 to 1
    ["firstCol2 to 1", "seconedCol2 to 1", "thirdCol2 to 1"].forEach(element => {
        document.getElementById(element).innerHTML = "2 to 1"
    });
}