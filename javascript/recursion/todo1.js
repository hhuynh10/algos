// Recursive Sigma
function rSigma(num, total = 0) {
    if (num <= 0){
        return total;
    }
    return rSigma(num - 1, total + num);
}

console.log(rSigma(5))


let total = 0
function fSigma(num){
    for (let i = 1; i <= num; i++){
        total += i
    }
    return total
}

console.log(fSigma(5))

// Recursive Factorial
function rFact(num, total = 1) {
    if (num <= 0){
        return total;
    }
    return rFact(Math.trunc(num) - 1, total * Math.trunc(num));
}

console.log(rFact(-1))

// Flood Fill
