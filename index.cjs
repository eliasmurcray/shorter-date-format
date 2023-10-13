const fs = require("fs");
const {
  binaryStringToBuffer,
  bufferToBinaryString,
  isoToBinary,
  binaryToIso,
} = require("./util.cjs");
const date = new Date().toISOString();
const binaryString = isoToBinary(date);

const binaryBuffer = binaryStringToBuffer(binaryString);
const filePath = "date.bin";

console.log("iso date:", date);
console.log("bin date:", binaryString);

fs.writeFile(filePath, binaryBuffer, (err) => {
  if (err) {
    console.error("Error writing the binary file:", err);
  } else {
    console.log("Successfully wrote binary data file to " + filePath);

    fs.readFile(filePath, (err, buf) => {
      if (err) {
        console.error("Error reading the binary file:", err);
      } else {
        // Print the binary string
        console.log("Successfully read binary data file.");
        const rebin = bufferToBinaryString(buf).padStart(49, "0");

        console.log("retrieved bin:", rebin);
        console.log("retrieved date:", binaryToIso(rebin));
      }
    });
  }
});
