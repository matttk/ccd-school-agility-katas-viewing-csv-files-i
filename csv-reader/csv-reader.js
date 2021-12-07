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
  return readFile(filename);
}

export { readFile, parseCsvFile };
