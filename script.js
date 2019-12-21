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

// Generate event listen
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value; //when it is clicked we need to get the value
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generate password function
  function generatePassword(lower, upper, number, symbol, length ) {
  // init pw var
  // filter out unchecked types
  // loop over the length call generator function for each type
  // add final pw to the pw var and return

  let generatePassword = '';
  const typesCount = lower + upper + number + symbol; 
  // console.log('typesCount: ', typesCount); //count the number of checked items

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );

  // console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }

  //loop over lengths and call generator function
  for(let i=0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log('funcName: ', funcName); //lower upper number symbol
      generatedPassword += randomFunc[funcName]();
    });
  }



}




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