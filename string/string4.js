// 1
let arr = []
let arr1 = []
function getFirstLetter(name){
    let newName = name.split('')
    arr1.push(newName[0])
    for (let i = 1; i < newName.length; i++){
        arr.push(newName[i])
    }
    let newName1 = arr.join('')
    let newName2 = arr1.join().toUpperCase()
    console.log(newName1 + " to the " + newName2 + "!")
}
getFirstLetter('milan')

// 2
