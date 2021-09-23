const myStr = "Hello world!"
const position = 1
const newChar = "V"

// export default function mudaChar(myStr,position,newChar) {
    const typeMyStr = typeof(myStr)
    const typePosition = typeof(position)
    const typeNewChar = typeof(newChar)

    let realPosition = 0
    let tamanho = 0
    const arrayStr = []
    let newStr = ""

    if (typePosition == "number") {
        if (position <= 0) {
            console.log("Posição inválida")
        } else {
            realPosition = position - 1
        }
    }

    if (typeMyStr == "string") {
        tamanho = myStr.length
        for (i = 0; i < tamanho; i++) {
            arrayStr[i] = myStr[i]
        }
    } else {
        console.log("it's not a string!")
    }

    if (typeNewChar == "string") {
        if (typePosition == "number") {
            arrayStr[realPosition] = newChar
            newStr = arrayStr[0]
            for (i = 1; i < tamanho; i++) {
                newStr += arrayStr[i]
            }
        } else { console.log("Invalid position.") }
    } else {
        console.log(typeNewChar + " (new char) need be a character.")
    }
//     return newStr
// }

console.log(newStr)

