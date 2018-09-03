// created by Joshua Yoes for the DTC 101 Textbook

//simply link to this script at the bottom of the body the page
//and create a div with the class 'base10_base2' to initialize

//this script has static file paths
//for this modules stylesheet and a diagram
//change these paths as needed
const binaryLinkPath = {
  stylesheet: 'base10-base2.css',
  diagram: 'img/number_diagram.svg'
}

//links everything to root div
const base10Base2 = document.getElementsByClassName('base10-base2')[0];

//creates link to stylesheet module and appends to head
const cssLink = document.createElement('link');
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('type', 'text/css')
cssLink.setAttribute('href', binaryLinkPath.stylesheet);
const head = document.getElementsByTagName('head')[0];
head.appendChild(cssLink);

//create text content
const p1 = document.createElement('p');
const p1Text = document.createTextNode('Whether you know it or not, you\'ve likely learned all of your math in base 10, also known as a decimal number system. Humans initally started counting this way becasue we had 10 fingers. But it isn\'t the only number system. Computers count in base 2, or binary. This is because they use transistors to store information, which only have two states: on or off. This is represented as a 0 or a 1.')
const p2 = document.createElement('p');
const p2Text = document.createTextNode('Thankfully counting in base 2 isn\'t much harder than counting in base 10. In base 10, you go 1, 2, 3, etc. utill eventually you reach 9. We have no more single digits after 9, so we then add a new 1 in front of it and reset the first digit back to 0, making 10. We do the same in binary, but instead of counting up 9, we only count to 1 before we have to add another digit in front of the first digit. So 0 is 0, 1 is 1, but then 2 is 10 because we have reach the maximimum first digit in base 2.');
const p3 = document.createElement('p');
const p3Text = document.createTextNode('Think of a number in your head. Before you type it in below, see if you can anticipate it in binary.');
p1.appendChild(p1Text);
p2.appendChild(p2Text);
p3.appendChild(p3Text);

//create diagram
const diagram = document.createElement('img');
diagram.setAttribute('src', binaryLinkPath.diagram);
diagram.setAttribute('alt', 'Diagram visualizing difference between base 2 and base 10 counting')

//create form elements
const form = document.createElement('form');
const numField = document.createElement('input');
const binaryField = document.createElement('input');
const numHeading = document.createElement('h2');
const numHeadingText = document.createTextNode('Base 10');
numHeading.appendChild(numHeadingText);

const binaryHeading = document.createElement('h2');
const binaryHeadingText = document.createTextNode('Base 2');
binaryHeading.appendChild(binaryHeadingText);

//set attributes of form element
numField.setAttribute('type', 'number');
numField.setAttribute('value', '4');
numField.classList.add('base10');

binaryField.setAttribute('type', 'number');
binaryField.setAttribute('value', '100');
binaryField.setAttribute('readonly','readonly');
binaryField.classList.add('base2');

numHeading.classList.add('base10__h2');
binaryHeading.classList.add('base2__h2')

numField.addEventListener('input', function(event){
  let num = numField.value;
  //converts base 10 number into binary
  binaryField.value = parseInt(num).toString(2);
});

//assemble form element
form.appendChild(numHeading);
form.appendChild(numField);
form.appendChild(binaryHeading);
form.appendChild(binaryField);

// HTML element structure inside root div
base10Base2.appendChild(p1);
base10Base2.appendChild(p2);
base10Base2.appendChild(diagram);
base10Base2.appendChild(p3);
base10Base2.appendChild(form);
