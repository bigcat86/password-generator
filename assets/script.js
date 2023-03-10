// Assignment Code
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
let lower = document.querySelector("#lower");
let upper = document.querySelector("#upper");
let number = document.querySelector("#number");
let special = document.querySelector("#special");
let input = document.getElementById("length");
// const length = prompt('What would you like the length of the password to be? (8-128 characters)');

const generateBtn = document.querySelector("#generate");

let length;
let checks = 0;
let lowerArray = [];
let upperArray = [];
let numberArray = [];
let specialArray = [];
let password = [];

// Get length from text box
input.addEventListener('input', () => {
    return length = input.value
});

// Get lowercase array
function getLowercase(event) {    
    lowerArray = [];
    if (lower.checked) {
        for (let i = 0; i < length; i++){
            lowerArray[i] = alpha[Math.floor(Math.random() * 26)]
        }
        return lowerArray;
    }else {
        return 0;
    }
}
lower.addEventListener('click', getLowercase);

// Get upercase array
function getUppercase() {
    upperArray = [];
    if (upper.checked) {
        for (let i = 0; i < length; i++){
            upperArray[i] = alpha[Math.floor(Math.random() * 26)].toUpperCase()
        }
        return upperArray;
    }else {
        return 0;
    }
}
upper.addEventListener('change', getUppercase);

// Get number array
function getNumber() {
    numberArray = [];
    if (number.checked) {
        for (let i = 0; i < length; i++){
            numberArray[i] = Math.floor(Math.random() * 9);
        }
        return numberArray;
    }else {
        return 0;
    }
}
number.addEventListener('click', getNumber) 

// Get special character array
function getSpecial() {
    specialArray = [];
    if (special.checked) {
        for (let i = 0; i < length; i++){
            specialArray[i] = specialChar[Math.floor(Math.random() * 10)];
        }
        return specialArray;
    }else {
        return 0;
    }
}
special.addEventListener('change', getSpecial);

// Function to get ALL arrays
function getALL() {
    getLowercase();
    getUppercase();
    getNumber();
    getSpecial();
}

// Generate password
function generatePassword() {
    // Add up number of criteria selected
    checks = 0; 
    if (lower.checked) {
        checks++;
    }
    if (upper.checked) {
        checks++;       
    }
    if (number.checked) {
        checks++;
    }
    if (special.checked) {
        checks++;
    }
    // Make sure there is at least one of each checked criteria, evenly distributed (must have lowerase)
    const lowerArrayNew = lowerArray.slice(0, Math.floor(length / checks) + length % checks);
    const upperArrayNew = upperArray.slice(0, Math.floor(length / checks));
    const numberArrayNew = numberArray.slice(0, Math.floor(length / checks));
    const specialArrayNew = specialArray.slice(0, Math.floor(length / checks));
    // Combine all arrays
    password = lowerArrayNew.concat(upperArrayNew, numberArrayNew, specialArrayNew);
    return password;
}

// Write password to the #password input
function writePassword() {
    getALL();
    generatePassword();
    if (lowerArray == 0 && upperArray == 0 && numberArray == 0 && specialArray == 0) {
        alert('Please select at least one criteria');
    }
    if (length < 8 || length > 128) {
        alert('Please enter a length 8 - 128');
        window.location.reload();
    }
    let passwordText = document.querySelector("#password");
    passwordText.value = password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

