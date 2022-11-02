var arr = [1, 5, 6, 2, 3]

// Push Front
function pushFront(frontNum){
    arr.push(frontNum)
    for (var i = arr.length-1; i > 0; i--){
        var temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
        }
        console.log(arr)
}
pushFront(13);

function pushFront1(frontNum){
    arr.unshift(frontNum)
    console.log(arr)
}
pushFront1(12)

function pushFront2(val){
    for (var i = arr.length; i >= 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val
    console.log(arr)
}
pushFront2(32)


// Pop Front
function popFront(){
    for (var i = 1; i < arr.length; i++){
                var temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
            }
            arr.pop()
            console.log(arr)
}
popFront()

function popFront1(){
    arr.shift()
    console.log(arr)
}
popFront1()

function popFront2(){
    let firstValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length  = arr.length-1
    console.log(arr)
}
popFront2()

// Insert At
function insertAt(num, index){
    arr.push(num)
    for (var i = arr.length-1; i > index; i--){
        var temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
        }
        console.log(arr)
}
insertAt(13, 4);

// Remove At
function removeAt(index){
    for (var i = index + 1; i < arr.length; i++){
                        var temp = arr[i]
                        arr[i] = arr[i-1]
                        arr[i-1] = temp
                    }
                    arr.pop()
                    console.log(arr)
}
removeAt(2);

