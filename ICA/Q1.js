//Question_01
function getMaxPurchaseAmount(budget, keyboards, mice) {
    let maxAmount = -1;
    
    for (let keyboard of keyboards) {
        for (let mouse of mice) {
            let total = keyboard + mouse;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }
    
    return maxAmount;
}

//Example
const budget = 50;
const keyboards = [20, 30, 40];
const mice = [5, 10, 15, 25];

const result = getMaxPurchaseAmount(budget, keyboards, mice);
console.log("Maximum possible purchase amount: ", result);
