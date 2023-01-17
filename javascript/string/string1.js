function removeBlanks(str){
    let newStr = ''
    for (let char in str){
        if (str[char] != ' '){
            newStr += str[char]
        }
    }
    return newStr
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ") )

function getDigits (str){
    let newStr = ''
    for(let char in str){
        if(!isNaN(str[char])){
            newStr += str[char]
        }
    }
    return Number(newStr)
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

function countNonSpaces(str){
    let counter = 0

    for (let char in str){
        if (str[char] != ' '){
            counter++
        }
    }
    return counter
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"))
