const fs = require('fs');

let myinfoBuffer = fs.readFileSync('1-json.json');
console.log(myinfoBuffer)

let myinfoJSON = myinfoBuffer.toString();
console.log(myinfoJSON)

let myinfoObject = JSON.parse(myinfoJSON)
console.log(myinfoObject)

myinfoObject.name = "Nachanon";
myinfoObject.age = 20;
console.log(myinfoObject)

const myNewJSON = JSON.stringify(myinfoObject)
fs.writeFileSync('1-json.json',myNewJSON);