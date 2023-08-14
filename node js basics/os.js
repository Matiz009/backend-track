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
console.log(os.freemem());
console.log(os.getPriority());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log("setting priority for" + " the current process to 13");
try {
  // Setting priority of current process
  os.setPriority(13);
} catch (err) {
  // Printing error message if any
  console.log(": error occurred" + err);
}

console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());
