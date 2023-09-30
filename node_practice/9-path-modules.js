const path = require('path')

const filePath = path.join('/contect/','subfolder','text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)