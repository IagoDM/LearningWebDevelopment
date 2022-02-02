const moduloA = require('./moduloA') // retorna um objeto com os dados exportados
const moduloB = require('./moduloB')

console.log(moduloA.aviso)
console.log(moduloA.saudacao)
console.log(moduloA.despedida)
console.log(moduloA)

console.log("")

console.log(moduloB.farewell)
console.log(moduloB.greeting)
console.log(moduloB.farewell())
console.log(moduloB)