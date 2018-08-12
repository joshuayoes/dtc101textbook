const converterContainer = document.getElementsByClassName('converter_container')[0];
const textModule = document.getElementsByClassName('textmodule')[0];
const asciiModule = document.getElementsByClassName('asciimodule')[0];
const binaryModule = document.getElementsByClassName('binarymodule')[0];

textModule.addEventListener('keyup', (event) => {
  let txt = textModule.value;

  //pushes each character in textModule into an array
  let txtArray = txt.split('');
  //returns new arrays with each character converted into ascii and binary
  let asciiArray = txtArray.map(x => x.charCodeAt());
  let binaryArray = asciiArray.map(x => parseInt(x.toString(2)));

  //joins new array back into string and then reassigns text boxes with converted strings
  asciiModule.value = asciiArray.join(' ');
  binaryModule.value = binaryArray.join(' ');
});
