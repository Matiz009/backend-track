const { error } = require("console");
const fs = require("fs");
const fsData = require("fs").promises;
try {
  const data = "Hello, I am working with node js and I am getting busy.";
  fs.writeFileSync("newFile.txt", data, "utf-8");
  console.log("Data written to file successfully.");
} catch (error) {
  console.log("An error occurred: ", error);
}

fs.readFile("newFile.txt", "utf8", (error, data) => {
  if (error) {
    console.error("An error occurred:", error);
  } else {
    console.log("Data:", data);
  }
});

async function writeFileASync() {
  try {
    const dataF = "Hello, world";
    await fsData.writeFile("myFile.txt", dataF, "utf-8");
    console.log("Data written to file successfully.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
fs.readFile("myFile.txt", "utf-8", function (error, data) {
  console.log("Data:", data);
});
