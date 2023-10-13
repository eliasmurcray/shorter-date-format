module.exports.binaryStringToBuffer = (binaryString) => {
  const groups = binaryString.match(/[01]{1,8}/g);
  const numbers = groups.map((binary) => parseInt(binary, 2));
  return Buffer.from(numbers);
};

module.exports.bufferToBinaryString = (buffer) => {
  return buffer
    .toString("binary")
    .split("")
    .map((c) => c.charCodeAt(0).toString(2))
    .join("");
};

module.exports.isoToBinary = (iso) => {
  return (
    (iso.slice(0, 4) - 1970).toString(2).padStart(13, "0") +
    (iso.slice(5, 7) - 1).toString(2).padStart(4, "0") +
    (+iso.slice(8, 10)).toString(2).padStart(5, "0") +
    (+iso.slice(11, 13)).toString(2).padStart(5, "0") +
    (+iso.slice(14, 16)).toString(2).padStart(6, "0") +
    (+iso.slice(17, 19)).toString(2).padStart(6, "0") +
    (+iso.slice(20, 23)).toString(2).padStart(10, "0")
  ).padStart(49, "0");
};

module.exports.binaryToIso = (binaryString) => {
  const year = (parseInt(binaryString.slice(0, 13), 2) + 1970).toString();
  const month = (parseInt(binaryString.slice(13, 17), 2) + 1)
    .toString()
    .padStart(2, "0");
  const day = parseInt(binaryString.slice(17, 22), 2)
    .toString()
    .padStart(2, "0");
  const hour = parseInt(binaryString.slice(22, 27), 2)
    .toString()
    .padStart(2, "0");
  const minutes = parseInt(binaryString.slice(27, 33), 2)
    .toString()
    .padStart(2, "0");
  const seconds = parseInt(binaryString.slice(33, 39), 2)
    .toString()
    .padStart(2, "0");
  const milliseconds = parseInt(binaryString.slice(39, 49), 2)
    .toString()
    .padStart(3, "0");

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}.${milliseconds}Z`;
};
