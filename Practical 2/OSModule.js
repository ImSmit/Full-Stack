const os = require("os");

console.log("platform : " + os.platform());
console.log("architecture : "+os.arch());
console.log("Total memmory : "+ os.totalmem() / (1024 * 1024 * 1024));
console.log("free memory : "+os.freemem()/ (1024 * 1024 * 1024));
console.log("Current user : "+os.userInfo().username);
