// Recursive Fibonacci
function rFib(num) {
    if (num <= 1) {
        return num;
    }
    return (rFib(num - 1) + rFib(num - 2));
}

console.log(rFib(8))