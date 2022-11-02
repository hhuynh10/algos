let arr = [3, 1, 7, 5, -2, 9, -5, 10, 8]

function removeNegatives(){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            newArr.push(arr[i])
        }
    }
    for (let j = 0; j < newArr.length; j++){
        if(newArr[j]>newArr[j+1]){
            let temp = newArr[j]
            newArr[j] = newArr[j+1]
            newArr[j+1] = temp
        }
    }
    return newArr
}

console.log(removeNegatives());

let arrOne = [42,true,4,"Kate",7]
function secondToLast(){
    let second = arrOne[arrOne.length - 2];
    if(arrOne.length - 2 == -1){
        return null
    }
    return second
}
console.log(secondToLast());

let arrTwo = [42,1,4,6,7]
function secondLangest(){
    for (let i = 0; i < arrTwo.length; i++){
        if(arrTwo[i] > arrTwo[i+1]){
            let largest = arrTwo[i]
            console.log(arrTwo[i])
            for (let j = 0; j < arrTwo.length; j++){
                if(arrTwo[j] > arrTwo[j+1] && arrTwo[j] < largest){
                    console.log(arrTwo[j])
                }
            }
        }
    }
}
secondLangest();

let arrThree = [5,2,3,6,4,9,7]
function nToLast(n){
    let nLast = arrThree[arrThree.length - n];
    if(arrThree.length - n == -1){
        return null
    }
    return nLast
}
console.log(nToLast(4));