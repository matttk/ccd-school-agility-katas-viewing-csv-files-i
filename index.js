import { parseCsvFile } from "./csv-reader/csv-reader.js";

function getFilename() {
  return "./persons.csv";
}

const filename = getFilename();
const data = parseCsvFile(filename);
console.log(data);
