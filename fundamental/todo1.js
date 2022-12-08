// 1
let myName = 'Hayden'
let myNumber = 42
    myNumber = 'Nick'
    
console.log(myNumber)


// 2
for (let i = -52; i <= 1066; i++){
    console.log(i)
}

// 3
function beCheerful(){
    for (let i = 0; i <= 98; i++){
        console.log('good morning!')
    }
}

beCheerful()

// 4
for (let i = -300; i <= 0; i += 3){
    if (i != -3 && i != -6){
        console.log(i)
    }
}

// 5
let i = 2000
while (i <= 5280){
    console.log(i)
    i++;
}

for (let i = 0; i <= 2022; i++){
    if (i % 4 == 0){
        console.log(i)
    }
}

// 6
let count = 0
for (let i = 512; i <= 4096; i++){
    if (i % 5 == 0){
        console.log(i);
        count++
    }
}

console.log('count = ' + count)

// 7
for (let i = 1; i <= 100; i++ ){
    if (i % 5 == 0){
        console.log(i + 'Coding')
    }
    if (i % 10 == 0){
        console.log(i + 'Dojo')
    }
}

// 8
let sum = 0;
for (let i = -300000; i <= 300000; i++){
    if (i % 2 != 0){
        sum += i
        console.log (sum)
        return sum
    }
}
