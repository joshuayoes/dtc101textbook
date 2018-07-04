//writes HTML inside of binarymodule div
const binary = document.getElementById('binarymodule');
binary.classList.add('binarymodule');

const textarea = document.createElement("TEXTAREA");
binary.appendChild(textarea);
textarea.classList.add('console');

const button = document.createElement('BUTTON');
const buttonText = document.createTextNode('Validate');
button.appendChild(buttonText);
binary.appendChild(button);
button.classList.add('button');


//CSS styles
const style = document.createElement('STYLE');
const binaryModuleStyle = document.createTextNode('.binarymodule {height: 50vh; position: relative; background-color: black; color: green; padding: 10px}');
const textAreaStyle = document.createTextNode('.console {width: 100%; height: 100%; background-color: black; color: green; border: none; outline: none; resize: none}');
const buttonStyle = document.createTextNode('.button {position: absolute; bottom: 30px; right: 30px; background-color: white; font-size: 1em; padding: 0.5em; border: 2px solid gray; border-radius: 3px}');

textarea.autofocus = "true";

style.appendChild(binaryModuleStyle); 
style.appendChild(textAreaStyle);
style.appendChild(buttonStyle);
document.head.appendChild(style);

//checks textarea to see if user has properly typed in answer
function checkAnswer(){
    //const answer = "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100";
    const answer = "01001000 01100101 01101100 01101100 01101111";
    //NOTE: make line break compatible across apple and linux
    if (textarea.value.includes(answer)){
        //textarea.value += '\nHello World';
        textarea.value += '\nHello';
    } else {
        textarea.value += '\nNot quite, try again!\n'
        textarea.focus();
    }
}
button.addEventListener('click', checkAnswer);
window.addEventListener('keyup', function(){
    if (document.activeElement == textarea && event.which == 13){
        //NOTE: remove new character that is created on enter press
        checkAnswer();
    }
});

let keyboard = [
    {
        letter: 'space',
        binary: '00100000'
    },
    {
        letter: 'A',
        binary: '01000001'
    }, 
    { 
        letter: 'B',
        binary: '01000010'
    },
    {
        letter: 'C',
        binary: '01000011'
    }, 
    {
        letter: 'D',
        binary: '01000100'
    },
    {
        letter: 'E',
        binary: '01000101'
    },
    {
        letter: 'F',
        binary: '01000110'
    },
    {
        letter: 'G',
        binary: '01000111'
    },
    {
        letter: 'H',
        binary: '01001000'
    },
    {
        letter: 'I',
        binary: '01001001'
    }, 
    {
        letter: 'J',
        binary: '01001010'
    },
    {
        letter: 'K',
        binary: '01001011'
    },
    {
        letter: 'L',
        binary: '01001100'
    },
    {
        letter: 'M',
        binary: '01001101'
    },
    {
        letter: 'N',
        binary: '01001110'
    },
    {
        letter: 'O',
        binary: '01001111'
    }, 
    {
        letter: 'P',
        binary: '01010000'
    },
    {
        letter: 'Q',
        binary: '01010001'
    },
    {
        letter: 'R',
        binary: '01010010'
    },
    {
        letter: 'S',
        binary: '01010011'
    }, 
    {
        letter: 'T',
        binary: '01010100'
    }, 
    {
        letter: 'U',
        binary: '01010101'
    },
    {
        letter: 'V',
        binary: '01010110'
    }, 
    {
        letter: 'W',
        binary: '01010111'
    },
    {
        letter: 'X',
        binary: '01011000'
    }, 
    {
        letter: 'Y',
        binary: '01011001'
    },
    {
        letter: 'Z',
        binary: '01011010'
    },
    {
        letter: 'a',
        binary: '01100001'
    },
    {
        letter: 'b',
        binary: '01100010'
    },
    {
        letter: 'c',
        binary: '01100011'
    },
    {
        letter: 'd',
        binary: '01100100'
    },
    {
        letter: 'e',
        binary: '01100101'
    },
    {
        letter: 'f',
        binary: '01100110'
    },
    {
        letter: 'g',
        binary: '01100111'
    },
    {
        letter: 'h',
        binary: '01101000'
    },
    {
        letter: 'i',
        binary: '01101001'
    }, 
    {
        letter: 'j',
        binary: '01101010'
    },
    {
        letter: 'k',
        binary: '01101011'
    },
    {
        letter: 'l',
        binary: '01101100'
    },
    {
        letter: 'm',
        binary: '01101101'
    },
    {
        letter: 'n',
        binary: '01101110'
    },
    {
        letter: 'o',
        binary: '01101111'
    }, 
    {
        letter: 'p',
        binary: '01110000'
    },
    {
        letter: 'q',
        binary: '01110001'
    },
    {
        letter: 'r',
        binary: '01110010'
    },
    {
        letter: 's',
        binary: '01110011'
    },
    {
        letter: 't',
        binary: '01110100'
    },
    {
        letter: 'u',
        binary: '01110101'
    }, 
    {
        letter: 'v',
        binary: '01110110'
    },
    {
        letter: 'w',
        binary: '01110111'
    },
    {
        letter: 'x',
        binary: '01111000'
    },
    {
        letter: 'y',
        binary: '01111001'
    },
    {
        letter: 'z',
        binary: '01111010'
    }
]

const binarykey = document.getElementById('binarykey');
const ul = document.createElement('UL');

binarykey.appendChild(ul);
ul.classList.add('list-reset', 'ASCII');

keyboard.forEach(function(key){
    let content = document.createTextNode(`${key.letter} = ${key.binary}`);
    const li = document.createElement('LI');
    
    ul.appendChild(li);
    li.appendChild(content);
});


//"Hello World" in binary
//https://www.binarytranslator.com/translating-text-to-binary

/*
//filters textarea only allowing 0, 1, or white space character
function filterConsole(){
    let regex = /[^0-1\s]/gi;
    this.value = this.value.replace(regex, "");
}
textarea.addEventListener("keyup", filterConsole);
*/
