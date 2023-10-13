const fs = require("fs");
const { binaryStringToBuffer, bufferToBinaryString } = require("./util.cjs");
const binaryString = "000000011010110010110100100111011001101001010001";
const binaryBuffer = binaryStringToBuffer(binaryString);
const filePath = "date.bin";

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
        console.log(bufferToBinaryString(buf).padStart(49, "0"));
      }
    });
  }
});
