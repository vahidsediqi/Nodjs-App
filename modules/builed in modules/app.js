
// The OS module provides information about the computer's operating system.
const os = require('os');


// info about current user
const userDetails = os.userInfo()
console.log(userDetails)

// This method returns the system uptime in seconds
const systemUpTime = os.uptime()

console.log(`The system Uptime is ${systemUpTime} seconds`)

// currentOS info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

// Path Module
// Extract the filename from a file path:
const path =  require('path')

console.log(path.posix)

const filePath = path.join('/content', 'subfolder','text.txt')

console.log(filePath)
