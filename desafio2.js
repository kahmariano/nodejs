//const myModules = require ('./desafio1')
//console.log(myModules)
//console.log(process.argv)

//const firstName = process.argv[2]
//const lastName = process.argv[3]
//console.log(`seu nome é ${firstName} ${lastName}`)
//console.log('seu nome é ',process.argv[2]+ ' '+ process.argv[3]) 
//console.log(process.argv)
const getFlags = require('./desafio1')
console.log(`Oiii ${getFlags('--name')}, ${getFlags('--greeting')}`)