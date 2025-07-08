// *************** Task 2 ***************
// Write a script to determine whether the entered string is palindrome 
// or not. Ask the user whether to consider case of the entered string or not,
//  handle both cases in your script i.e. RADAR NOON MOOM are palindrome. 
// Note: raDaR is not a palindrome
// if user requested considering case of entered string.
let str;
while (true) {
    str = prompt("Enter a string:");

    if (/\d/.test(str)) {
        alert("The string should not contain numbers.");
    } else {
        break;
    }
}
let considerCase = prompt("Consider case? (yes or no):");

if (considerCase.toLowerCase() === 'no') {
    str = str.toLowerCase();
}
let reversed = str.split('').reverse().join('');
if (str === reversed) {
    alert("It's a palindrome!");
} else {
    alert("It's NOT a palindrome.");
}

