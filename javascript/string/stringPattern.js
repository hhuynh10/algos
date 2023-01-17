str = ""
function print(num){
    for (var i = 1; i <= num; i++){
        for (var j = 1; j <= i; j++){
            str += "*"
        }
        str += "\n"
    }
    console.log(str)
}

print(5)