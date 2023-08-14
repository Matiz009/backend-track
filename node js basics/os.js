const os = require("os");
console.clear;
console.log(os.version());
console.log(JSON.stringify(os.EOL));
console.log(
  "Paragraphs always contains EOL" + os.EOL + "EOL stands for end of line"
);

console.log(
  "EOL varies from os to os" +
    os.EOL +
    "For windows it is \\r\\n" +
    os.EOL +
    "For POSIX it is \\n" +
    os.EOL
);
console.log(os.arch());
console.log(os.cpus());
console.log(os.endianness());
