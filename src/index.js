const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    let letterLength = 10;
    let lettersArr = [];

    for (let i = 0; i < expr.length; i += letterLength) {
        lettersArr.push(expr.slice(i, i + letterLength));
    }

    let lettersArrSliced = lettersArr.map(el => {
        for (let i = 0; i < el.length; i++) {
            if (el[i] != '0') {
                return el.slice(i);
            }
        }
    });

    let morseArr = [];

    lettersArrSliced.forEach(el => {
        let letter = '';

        for (let i = 0; i < el.length; i += 2) {
            if (el != '**********') {
                if (el.slice(i, i + 2) === '10') {
                    letter += '.';
                } else if (el.slice(i, i + 2) === '11') {
                    letter += '-';
                }
            } else {
                letter = ' ';
            } 
        }

        morseArr.push(letter) 
    });

    morseArr.forEach(el => {
        if (el === ' ') {
            result += ' ';
        } else {
            result += MORSE_TABLE[el];
        }
    });

    return result;
}

module.exports = {
    decode
}