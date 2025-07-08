// *************** Task 3 ***************
// write a script that accepts a string from user through prompt 
// and count the number of ‘e’ characters in it.

let input = prompt("Enter a string:");
let count = 0;
for (let char of input) {
    if (char === 'e') {
        count++;
    }
}
alert("Number of 'e': " + count);



