// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    return str === reverseString(str);
}

// Function to check the type of input and alert the user
function checkInputType(input) {
    if (!isNaN(input)) {
        alert("Type: number");
    } else {
        alert("Type: " + typeof input);
    }
}

// Function to check if an array is consistent
function isConsistent(arr) {
    let differences = [];
    for (let i = 1; i < arr.length; i++) {
        differences.push(arr[i] - arr[i - 1]);
    }
    return new Set(differences).size === 1;
}

// Reverse the string "Superman"
let originalString = "Superman";
let reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString);

// Check if the reversed string is a palindrome
if (isPalindrome(reversedString)) {
    console.log("The reversed string is a palindrome.");
} else {
    console.log("The reversed string is not a palindrome.");
}

// Ask for user input and check its type
let userInput = prompt("Enter some data:");
checkInputType(userInput);

// Check if the given array is consistent
let givenArray = [1, 2, 3, 5, 6, 7];
if (isConsistent(givenArray)) {
    console.log("The array is consistent.");
} else {
    console.log("The array is not consistent.");
}
