// 1
let funStr = "Emma shreds on her electric cello";

let wordArr = funStr.split(' ')
let wordArr1 = wordArr[4].split('')
console.log(wordArr)
console.log(wordArr1)

let wordArr2 = wordArr.join(' ')
console.log(wordArr2)

// 2
const favoriteLanguageString = 'PL/I';
switch (favoriteLanguageString) {
    case 'JavaScript': 
        console.log("Ah so, we thrive on chaos!"); 
        break;
    case 'Python': 
        console.log("Parenthesis-haters, unite!"); 
        break;
    case 'PL/I': 
        console.log("Wha? Who let you in here?");
    default: console.log("Why don't you choose a different one.");
}

// 3