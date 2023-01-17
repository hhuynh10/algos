// 1
function rollOne(){
    let randomNum = Math.floor(Math.random() * 6) + 1
    console.log("Random number is: " + randomNum)
    return randomNum
}
rollOne()

function playFives(num){
    for (let i = 1; i <= num; i ++){
        let randomNum = rollOne()
        if (randomNum == 5){
            console.log("That's good luck!")
        }
    }
}
playFives(5)