// Built-in Modules in node js
// OS
// PATH
// FS
// HTTP


const os = require('os')

// Information about current user

const user = os.userInfo()
console.log(user)

console.log(`System's up time is ${os.uptime()}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS)