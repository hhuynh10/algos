// 1
function makeItBig(arr){
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] >= 0){
            arr[i] = 'big'
            console.log(arr)
        }
    }
}
makeItBig([-1,3,5,-5])

// 2
function printLowReturnHigh(arr){
    for (let i = 0; i < arr.length; i++){
        let min = arr[0]
        if (arr[i] < min){
            min = arr[i]
            console.log('Lowest value: ' + min)
        }
    }
}
printLowReturnHigh([3, 6, 1, 9])

// 3
function printOneReturnAnother(arr){
    console.log('Second-to-last value: ' + arr[arr.length-2])
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            console.log('First odd value: ' + arr[i])
            return arr[i]
        }
    }
}

printOneReturnAnother([2,6,1,7,9,4])

// 4
let newArr = [] 
function doubleVision(arr){
    for ( let i = 0; i < arr.length; i++){
        arr[i] *= 2
        newArr.push(arr[i])
    }
    console.log('Doubled: ' + newArr)
    return newArr
}
doubleVision([1,5,9])

// 5
let positiveNum = 0
function countPositives(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            positiveNum++
        }
        arr[arr.length-1] = positiveNum
    }
    console.log('New Array: ' + arr)
    return arr
}
countPositives([-1,1,1,1])

// 6
function evensAndOdds(arr){
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] % 2 != 0 && arr[i] == arr[i + 1] == arr[i + 2]){
            console.log("That's odd!")
        }
        else if (arr[i] % 2 == 0 && arr[i] == arr[i + 1] == arr[i + 2]){
            console.log("Even more so!")
        }
    }
}
evensAndOdds([4, 5, 1, 1, 1])

// 7
function incrementToSeconds(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            arr[i]++
        }
    }
    console.log("Add 1 to odd values: " + arr)
    return arr
}
incrementToSeconds([2, 1, 3, 8, 9])

// 8
function previousLength(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].length
    }
    console.log('Length of each element: ' + arr)
}
previousLength(['hi', 'I hate you', 'two'])

// 9
let newArr1 = []
function addSevenToMost(arr){
    for (let i = 1; i < arr.length; i++){
        arr[i] += 7
        newArr1.push(arr[i])
    }
    console.log('Seven to most array: ' + newArr1)
}
addSevenToMost([3, 1, 2, 5, 8])

// 10
let newArr2 = []
function reverse(arr){
    for (let i = 0, j = arr.length -1; i < arr.length; i ++, j--){
        newArr2[i] = arr[j]
    }
    console.log(newArr2)
    return newArr2
}
reverse([3,1,6,4,2])

// 11
function negative(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            arr[i] *= -1
        }
    }
    console.log('Negative: ' + arr)
}
negative([1,-3, 5, 8, -2, -7])

// 12
let countHungry = 0
function alwaysHungry(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 'food'){
            console.log('yummy')
            countHungry++
        }
    }
    if (countHungry == 0){
        console.log('Im hungry')
    }
}
alwaysHungry([1, 1, 10, 2, 7])

// 13
function scaleTheArray(arr, num){
    for (let i = 0; i < arr.length; i++){
        arr[i] *= num
    }
    console.log('Multiplied array: ' + arr)
}
scaleTheArray([1, 3, 5], 6)

// 14
function swap(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    console.log('Swapped array: ' + arr)
    return arr;
}
swap(["pizza",42,"Ada",2,true])
