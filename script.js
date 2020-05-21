// linking elements in html
const formElement = document.getElementById('inputForm')
const lengthElement = document.getElementById('characters')
const uppercaseElement = document.getElementById('includeUppercase')
const lowercaseElement = document.getElementById('includeLowercase')
const numberElement = document.getElementById('includeNumbers')
const symbolElement = document.getElementById('includeSymbols')
const display = document.getElementById('displayBox')

// form listening event
formElement.addEventListener('submit', e => {
    const length = lengthElement.value
    const uppercase = uppercaseElement.checked
    const lowercase = lowercaseElement.checked
    const numbers = numberElement.checked
    const symbols = symbolsElement.checked
    const password = generatePassword(length, uppercase, lowercase, symbols, numbers)
})
// char code variables
const lowerCharCodes = arrayCharCodes(65,90)
const upperCharCodes = arrayCharCodes(97,122)
const numberCharCodes = arrayCharCodes(48,57)
const symbolCharCodes = arrayCharCodes(33,47)
    .concat(arrayCharCodes(58,64))
        .concat(arrayCharCodes(91,96))
            .concat(arrayCharCodes(123,126))

// char codes loop function

function arrayCharCodes(min,max){
    const array = []
    for (let i = min; i<= max; i++){
        array.push(i)
    }
    return array
}
// password genertor function

function generatePassword(length, uppercase, lowercase, symbols, numbers){
    let charCodes = lowerCharCodes
    if (uppercase) charCodes = charCodes.concat(upperCharCodes)
    if (numbers) charCodes = charCodes.concat(numberCharCodes)
    if (symbols) charCodes = charCodes.concat(symbolCharCodes)

    const characters = []
    for (let i =0; i <length; i++){
        const char = charCodes[Math.floor(Math.random() * charCodes.length)]
        characters.push(String.fromCharCode(char))
    }
    return characters.join('')
}

