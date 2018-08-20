//create HTML elements
const base10Base2 = document.getElementsByClassName('base10_base2')[0];
const form = document.createElement('form');
const numField = document.createElement('input');
const binaryField = document.createElement('input');
const numHeading = document.createElement('h2');
const numHeadingText = document.createTextNode('Base 10');
const binaryHeading = document.createElement('h2');
const binaryHeadingText = document.createTextNode('Base 2');
const diagram = document.createElement('img');
const baseCounting = document.createElement('p');

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
base10Base2.appendChild(diagram);
base10Base2.appendChild(form);

numHeading.appendChild(numHeadingText);
binaryHeading.appendChild(binaryHeadingText);

form.appendChild(numHeading);
form.appendChild(numField);
form.appendChild(binaryHeading);
form.appendChild(binaryField);

numField.addEventListener('input', function(event){
  let num = numField.value;
  //converts base 10 number into binary
  binaryField.value = parseInt(num).toString(2);
});
