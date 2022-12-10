// 1
let sum = 0
function betterThreesFives(start, end){
    for (let i = start; i <= end; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    console.log(sum)
}
betterThreesFives(100, 4000000)

// 2
let quarters = 0
let dimes = 0
let nickels = 0
let pennies = 0
function generateCoinChange(cents){
        quarters = (cents - (cents % 25)) / 25
        console.log('Quarters: ' + quarters)
        dimes = ((cents % 25) - (cents % 25) % 10) / 10
        console.log('Dimes: ' + dimes)
        nickels = (((cents % 25) % 10) - ((cents % 25) % 10) % 5) / 5
        console.log('Nickels: ' + nickels)
        pennies = ((((cents % 25) % 10) % 5) - (((cents % 25) % 10) % 5) % 1) / 1
        console.log('Pennies: ' + pennies)

}
generateCoinChange(94)
