// created by Joshua Yoes for the DTC 101 Textbook

//simply link to this script at the bottom of the body the page
//and create a div with the class 'text-ascii-binary_container' to initialize

//this script has static file paths
//for the module background images and a stylesheet
//if you need to change them ctrl-f "PATH" to find all instances of file paths

//create modules
const createTextModule = document.createElement('div');
const createAsciiModule = document.createElement('textarea');
const createBinaryModule = document.createElement('textarea');
createTextModule.setAttribute('contenteditable', 'true');
createTextModule.classList.add('textmodule');
createAsciiModule.classList.add('asciimodule');
createBinaryModule.classList.add('binarymodule');
createAsciiModule.readOnly = 'true';
createBinaryModule.readOnly = 'true';

//place modules inside of container div
const converterContainer = document.getElementsByClassName('text-ascii-binary_container')[0];
converterContainer.appendChild(createTextModule);
converterContainer.appendChild(createAsciiModule);
converterContainer.appendChild(createBinaryModule);

//creates link to stylesheet in head of document
const styleSheet = document.createElement('link');
styleSheet.type = 'text/css';
styleSheet.rel = 'stylesheet';
styleSheet.href = 'modulestyles.css'; //PATH
document.head.appendChild(styleSheet);

const textModule = document.getElementsByClassName('textmodule')[0];
const asciiModule = document.getElementsByClassName('asciimodule')[0];
const binaryModule = document.getElementsByClassName('binarymodule')[0];

//data to help popualte background titles in modules
const moduleArray = [textModule, asciiModule, binaryModule];
const moduleImg = ['img/text.svg', 'img/ascii.svg', 'img/binary.svg'] //PATH

//function that converts contents of text module into ascii and binary every key press
textModule.addEventListener('keyup', (event) => {
  let txt = textModule.textContent;

  //pushes each character in textModule into an array
  let txtArray = txt.split('');
  //returns new arrays with each character converted into ascii and binary
  let asciiArray = txtArray.map(character => character.charCodeAt());
  let binaryArray = asciiArray.map(character => parseInt(character.toString(2)));

  //joins new array back into string and then reassigns text boxes with converted strings
  let asciiString = asciiArray.join(' ');
  let binaryString = binaryArray.join(' ');
  asciiModule.value = asciiString;
  binaryModule.value = binaryString;

  //diplays background images if there is no text in text module
  replaceBackground();
});

//event listeners to toggle background image in text module based on user clicking it
textModule.addEventListener('focus', replaceBackground)
textModule.addEventListener('blur', replaceBackground)

//function that places background titles on modules if there isn't text
function replaceBackground(){
  if (document.activeElement !== textModule && textModule.textContent == ''){
    moduleArray.forEach((module, index) => {
      module.style = `background-image: url(${moduleImg[index]});`
    });
  } else if (textModule.textContent !== '' && document.activeElement == textModule){
    moduleArray.forEach((module) => {
      module.style = 'background-image: none';
    });
  } else {
    textModule.style = 'background-image: none';
  }
};
