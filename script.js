const form = document.getElementById('form')
const lengthEl = document.getElementById('characters')
const lowercaseEl = document.getElementById('includeLowerCase')
const uppercaseEl = document.getElementById('includeUpperCase')
const numbersEl = document.getElementById('includeNumbers')
const symbolsEl = document.getElementById('includeSymbols')
const displayEl = document.getElementById('display')

const uppercaseChar = arrayCharCodes(65,90)
const lowercaseChar = arrayCharCodes(97,122)
const numChar = arrayCharCodes(48,57)
const symChar = arrayCharCodes(33,47)
.concat(
    arrayCharCodes(58,64)
).concat(
    arrayCharCodes(91,96)
).concat(
    arrayCharCodes(123,126)
)

// form listening event
form.addEventListener('submit', e => {
    const length = lengthEl.value
    const symbols = symbolsEl.checked
    const numbers = numbersEl.checked
    const uppercase = uppercaseEl.checked
    const lowercase = lowercaseEl.checked
    const password = generatePassword(length, uppercase, lowercase, symbols, numbers)
    displayEl.innerHTML = password
})


function generatePassword(length,uppercase, lowercase, symbols, numbers){
  let charCodes = lowerCaseChar
  if (uppercase) charCodes = charCodes.concat(uppercaseChar)
  if (symbols) charCodes = charCodes.concat(symchar)
  if (numbers) charCodes = numChar.concat(numChar)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCode[Math.floor(Math.random()* charCodes.length)]
      passwordCharacters.push(String.fromChardCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayCharCodes(low,high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


