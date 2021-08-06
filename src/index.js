const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = [];
    let arr = expr.split('');

    while (arr.length) {
        const lengthLetter = 10;
        let morse = '';
        let oneLetterArr = arr.splice(lengthLetter * -1);

        if (oneLetterArr.join('') === '**********') {
            result.push(' ');
        }

        for (let index = 0; index < oneLetterArr.length; index += 2) {
            let oneLetterCode = oneLetterArr.slice(index, index + 2).join('');
            morse += oneLetterCode === '10' ? '.' :
                oneLetterCode === '11' ? '-' : '';
        }
        result.push(MORSE_TABLE[morse]);
    }

    return result.reverse().join('');
}

module.exports = {
    decode
}