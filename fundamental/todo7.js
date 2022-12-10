// 1
let total = 20
function sweatshirtPricing(num) {
    if (num == 1) {
        total = total
    }
    if (num == 2) {
        total = Math.ceil((num  * total) * 0.91)
    }
    if (num == 3) {
        total = Math.ceil((num  * total) * 0.81)
    }
    if (num == 4) {
        total = Math.ceil((num  * total) * 0.65)
    }
    console.log('Your total is: ' + total)
}
sweatshirtPricing(1)