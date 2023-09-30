// GLOBALS -NO WINDOW!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules(CommonJs)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)

// setInterval(()=> {
//     console.log("Hello World")
// },1000)

// setTimeout(()=>{
//     console.log("Hello World");
// },1000)




// CommoJs,   every file in node is a module(by default)
// Modules  - Encapsulated Code(only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// console.log(data.singlePerson.name)
// console.log(data['singlePerson']['name'])

// sayHi('Shoaib')
// sayHi(names.muhammad)
// sayHi(names.shoaib)

require('./7-mind-grenade') // when we import a module we actully invoke it