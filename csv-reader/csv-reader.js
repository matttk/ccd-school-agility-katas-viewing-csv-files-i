import fs from "fs";

function readFile(filename) {
  try {
    return fs.readFileSync(filename, "utf8");
  } catch (err) {
    console.error(err);
  }

  return null;
}

function parseCsvFile(filename) {
  const fileData = readFile(filename);
  const data = parseFileData(fileData);

  return data;
}

function parseFileData(fileDataAsString) {
  const parsedData = {};

  if (fileDataAsString.trim() === "") {
    return parsedData;
  }

  const lines = splitStringByNewlines(fileDataAsString);
  const header = parseLine(lines[0]);
  const data = lines.slice(1).map(parseLine);

  return {
    header,
    data,
  };
}

function splitStringByNewlines(string) {
  return string.split("\n");
}

function parseLine(line) {
  return line.split(";");
}

export {
  parseCsvFile,
  parseFileData,
  parseLine,
  readFile,
  splitStringByNewlines,
};
