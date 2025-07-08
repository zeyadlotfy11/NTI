// 1. Write your own function that can add n values ensure that 
// all passing parameters are numerical values only.

function addNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input must be an array.');
        return;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (typeof value !== 'number' || isNaN(value)) {
            console.log('Only numbers are allowed');
            return;
        }
        sum += value;
    }

    console.log('Sum:', sum);
}

addNumbers([2, 3, 1]);
addNumbers([1, 'zeyad', 1]);
addNumbers("not array");

