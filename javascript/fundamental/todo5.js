// 1
let sum = 0
function sigma(num){
    for (let i = 0; i <= num; i ++){
        sum += i
    }
    console.log('Sigma number is: ' + sum)
}
sigma(9)

// 2
let sum1 = 1
function factorial(num){
    for (let i = 1; i <= num; i ++){
        sum1 *= i
    }
    console.log('Factorial number is: ' + sum1)
}
factorial(5)

// 3
let str = ''
function drawLeftStars(num, char){
    for (let i = 1; i <= num; i++){
        str = str.concat(char)
    }
    console.log('String: ' + str)
}
drawLeftStars(5, '*')