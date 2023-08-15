const path = require("path");
const fileName = path.basename("C:UsersiammaOneDrivePicturesScreenshots");
console.log(fileName);
console.log(path.delimiter);
console.log(path.dirname("C:UsersiammaOneDrivePicturesScreenshots"));
var ext = path.extname("/Users/Refsnes/demo_path.js");
console.log(ext);
var obj = { dir: "C:\\Users\\Refsnes", base: "demo_path.js" };

var p = path.format(obj);
console.log(p);
console.log(path.isAbsolute("/test/demo_path.js")); //true
console.log(path.isAbsolute("test/demo_path.js")); //false
console.log(path.isAbsolute("C:\\test\\demo_path.js")); //true
var x = path.join("Users", "Refsnes", "demo_path.js");

console.log(x);
