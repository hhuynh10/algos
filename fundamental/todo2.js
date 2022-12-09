// 1
function countdown(num) {
    let arr = []
    for (let i = num; i >= 0; i--){
        arr.push(i);
        console.log(arr)
        console.log('Array length:' + arr.length)
    }
    return arr
}
countdown(6)

// 2
function printAndReturn(firstNum, secondNum){
    console.log(firstNum)
    return secondNum
}
printAndReturn(5, 8)

// 3
let sum = 0
function firstPlusLength(arr){
    if (isNaN(arr[0])){
        console.log('What?')
    }else{
        sum = arr[0] + arr.length
        console.log("Length:" + sum)
    }
    return sum
}

firstPlusLength([5, 8, 1, 6, 4, 3])

// 4
count = 0
newArr = []
function greaterThenSecond(arr){
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > arr[1] && arr.length > 0){
            newArr.push(arr[i])
            count++
            console.log(newArr)
            console.log("Values greater than 2nd value:" + count)
        }else if (arr.length < 1){
            return false
        }
    }
    return newArr
}
greaterThenSecond([1,3,5,7,2,13])

// 5
let arr = []
function thisLengthThatValue(num1, num2){
    for ( let i = num1, j = num2; i >= 0, j >= 0; i--, j--){
        arr.push(i)
        console.log(arr)
        if (i == j){
            console.log('Jixn')
        }
    }
    return arr
}
thisLengthThatValue(5, 8)