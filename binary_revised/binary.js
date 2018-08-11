
/*
console.log(keyboard);
keyboard.forEach(function(key){
  keys.insertAdjacentHTML('beforeend', `${key.ascii} `);
});
*/
/*
keyboard.forEach(function(key){
  keys.insertAdjacentHTML('beforeend', `${key.ascii.toString(2)} = ${key.ascii} = ${key.letter} <br>`);
});
*/
//create HTML elements
const keys = document.getElementsByClassName('keys')[0];
const form = document.createElement('form');
const numField = document.createElement('input');
const binaryField = document.createElement('input');
const numHeading = document.createElement('h2');
const numHeadingText = document.createTextNode('Base 10');
const binaryHeading = document.createElement('h2');
const binaryHeadingText = document.createTextNode('Base 2');
const diagram = document.createElement('img');
const baseCounting = document.createElement('p');
//const baseCountingText = document.createTextNode()

//set input attributes
diagram.setAttribute('src', 'img/number_diagram.svg')
diagram.setAttribute('alt', 'Diagram visualizing difference between base 2 and base 10 counting')
numField.setAttribute('type', 'number');
binaryField.setAttribute('type', 'number');
numField.setAttribute('value', '4');
binaryField.setAttribute('value', '100');
binaryField.setAttribute('readonly','readonly');
numHeading.classList.add('base10__h2');
numField.classList.add('base10');
binaryHeading.classList.add('base2__h2')
binaryField.classList.add('base2');

//setting HTML element structure
keys.appendChild(diagram);
keys.appendChild(form);

numHeading.appendChild(numHeadingText);
binaryHeading.appendChild(binaryHeadingText);

form.appendChild(numHeading);
form.appendChild(numField);
form.appendChild(binaryHeading);
form.appendChild(binaryField);

//updates base 2 form based on base 10 change
numField.addEventListener('input', function(event){
  let num = this.value;
  //converts base 10 number into binary
  binaryField.value = parseInt(num).toString(2);
});
