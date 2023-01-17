let arr = [5,2,2,8,2]

function isCreditCardValid(){
    let lastDigit = arr[arr.length-1];
    arr.pop()
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            arr[i] *= 2;
            console.log(arr)
        }
        if(arr[i] > 9){
            arr[i] -= 9;
            console.log(arr)
            return arr
        }
    }
    let total = 0;
    for (var j in arr){
        total += arr[j]
    }
}

isCreditCardValid()