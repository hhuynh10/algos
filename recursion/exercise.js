// 1. Write a JavaScript program to calculate the factorial of a number.
function factorial(num, total = 1){
    if (num <= 0){
        return total;
    }
    return factorial(num - 1, total * num)
}

console.log(factorial(5));


// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. 
function gcd(num1, num2){
    if (num2 <= 0){
        return num1;
    }
    return gcd(num2, num1 % num2)
}

console.log(gcd(2154, 458))


// 3. Write a JavaScript program to get the integers in range (x, y).
function range (startNum, endNum) {
    if (endNum - startNum === 2) 
    {
        return [startNum + 1];
    } 
    var list = range(startNum, endNum - 1);
    list.push(endNum - 1);
    return list;
};

console.log(range(1,10));


// 4. Write a JavaScript program to compute the sum of an array of integers.
function sumArr(arr) {
    if (arr.length === 1){
        return 0;
    }
    return arr.pop() + sumArr(arr)
}

console.log(sumArr([1, 2, 3, 4, 5, 6]));


// 5. Write a JavaScript program to compute the exponent of a number.
function exponent (num, n) {
    if (n === 0) {
        return 1;
    }
    return num * exponent(num, n - 1);
}

console.log(exponent(5, 2))


// 6. Write a JavaScript program to get the first n Fibonacci numbers.
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    return (fibonacci(num - 1) + fibonacci(num - 2));
}

console.log(fibonacci(5))


// 7. Write a JavaScript program to check whether a number is even or not.
function evenOrNot(num) {
    if (num < 0){
        num = Math.abs(num)
    }
    if (num === 0){
        return true
    }
    if(num === 1){
        return false
    }
    num = num - 2
    return evenOrNot(num)
}

console.log(evenOrNot(5))


// 8. Write a JavaScript program for binary search.
function binarySearch(arr, value) {
    var mid = Math.floor(arr.length/2);
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return binarySearch(arr.slice(0, mid), value);
    }
    else if(value > arr[mid] && arr.length > 1) {
        return binarySearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}

console.log(binarySearch([1, 3, 5, 6], 4));
console.log(binarySearch([4, 5, 6, 8, 12], 5));

// 9.
function sortArray(arr) {
    arr.sort((a, b) => a - b)
    return arr
}

console.log(sortArray([6, 2, 11, 8, 1]))

function findValue(arr, val){
    if (arr.find(value => value == val)){
        return true
    }
    return false
}

console.log(findValue([6, 2, 11, 8, 1], 2))