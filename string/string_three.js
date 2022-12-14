// 1
let count1 = 0
let count2 = 0
function parensValid(str){
    for (let i = 0; i < str.length; i ++){
        if (str.charAt(i) == "("){
            count1++
        }
        if (str.charAt(i) == ")"){
            count2++
        }
    }
    if (count1 == count2){
        console.log('true')
    }else{
        console.log('False - Missing parenthesis')
    }
}
parensValid("N(0(p)3");

// 2
function isPal(str){
    
}