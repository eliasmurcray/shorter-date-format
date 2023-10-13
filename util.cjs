module.exports.binaryStringToBuffer = (binaryString) => {
  const groups = binaryString.match(/[01]{1,8}/g);
  const numbers = groups.map((binary) => parseInt(binary, 2));
  return Buffer.from(numbers);
};

module.exports.bufferToBinaryString = (buffer) => {
  return buffer
    .toString("latin1")
    .split("")
    .map((c) => c.charCodeAt(0).toString(2))
    .join("");
};
