// generate functions
// Dom elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value; //when it is clicked we need to get the value
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol, length );
  function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length );
})


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //get a random number that corresponds to a charcode 97 because "a" and 26 because there are 26 letters
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //65 is for uppercase letters
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48); //for numbers 
}

function getRandomSymbol() {
  const symbols = '~!@#$%^&*()-+=?'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomLower());