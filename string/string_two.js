// 1
function reverseString(str){
    let newStr = str.split('')
    let newStr1 = newStr.reverse()
    let newStr2 = newStr1.join('')
    console.log('Reverse of ' + str + ' is: ' + newStr2);
}
reverseString('creature');

let arrStr = []
function reverseString1(str){
    let newStr = str.split('')
    for (i = 0, j = newStr.length - 1; i < newStr.length; i ++, j--){
        arrStr[j] = newStr[i]
    }
    let newStr1 = arrStr.join('')
    console.log('Reverse of ' + str + ' is: ' + newStr1)
}
reverseString1('hello');

// 2
let newArr = []
function removeEvenLength(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length % 2 != 0){
            newArr.push(arr[i])
        }
    }
    console.log('Odd length: ' + newArr)
}
removeEvenLength(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."])
