// 1
function rollOne(){
    let randomNum = Math.floor(Math.random() * 6) + 1
    console.log("Random number is: " + randomNum)
    return randomNum
}
// rollOne()

function playFives(num){
    for (let i = 1; i <= num; i ++){
        let randomNum = rollOne()
        if (randomNum == 5){
            console.log("That's good luck!")
        }
    }
}
// playFives(5)

function playStatistics() {
    for (let i = 1; i <= 8; i ++){
        let randomNum = rollOne()
        for (let j = 0; j < randomNum; j ++){
            if (randomNum < j){
                console.log("Highest value: " + j)
            }
            if(randomNum > j){
                console.log("Lowest value: " + j)
            }
        }
    }
}
playStatistics()