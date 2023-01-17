// 1
let newArr = []
function onlyKeepTheLastFew(arr, num){
    for (let i = arr.length - num; i < arr.length; i++ ){
        newArr.push(arr[i])
    }
    console.log (newArr)
    return newArr
}
onlyKeepTheLastFew([2,4,6,8,10],3)

// 2
let newArr1 = [
    'volcanos','volcanos','volcanos','volcanos','volcanos','volcanos','volcanos','volcanos','volcanos','volcanos',
    'tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis','tsunamis',
    'earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes','earthquakes',
    'blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards','blizzards',
    'meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors','meteors'
]

function poorKenney(){
    let randomDay =  newArr1[Math.floor(Math.random() * newArr1.length)]
    console.log('What happened to Kenny today: ' + randomDay)
}
poorKenney()

// 3
let IQ = 101
let num = 0.01
function soaringIQ(){
    for (let i = 1; i <= 98; i ++){
        num += 0.01
        IQ += num
    }
    console.log('IQ is: ' + IQ)
    return IQ
}
soaringIQ()

// 4
let grade = ''
let score = Math.floor(Math.random() * 100)
function letterGrade(){
    if (score < 70){
        grade = "D"
    }
    else if (score >= 70 && score < 80){
        grade = "C"
    }
    else if (score >= 80 && score < 90){
        grade = "B"
    }
    else if (score >= 90 && score <= 100){
        grade = "A"
    }
    console.log('Score: ' + score + '. ' + 'Grade: ' + grade)
}
letterGrade()