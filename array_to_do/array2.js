function reverseArray(arr) {
    // Loop through the array - but only halfway (otherwise we unreverse and get the original array back)
    for (var i = 0; i < arr.length / 2; i++) {
        // Swap values
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

function filterRange(arr, minVal, maxVal) {
    var nextInd = 0; // Index where the next array value that's from min to max (inclusively) will go
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++; // Increment index for next valid value found
        }
    }
    arr.length = nextInd; // Chop off excess values
}

function concatArrays(arr1, arr2) {
    var newArr = [];
    var curInd = 0; // Current index for where we'll put new items
    // Loop through the first array and push those items into the new array
    for (var i = 0; i < arr1.length; i++) {
        // newArr.push(arr1[i]);
        newArr[curInd] = arr1[i];
        curInd++;
    }
    // Loop through the first array and push those items into the new array
    for (var i = 0; i < arr2.length; i++) {
        // newArr.push(arr1[i]);
        newArr[curInd] = arr2[i];
        curInd++;
    }
    return newArr;
}