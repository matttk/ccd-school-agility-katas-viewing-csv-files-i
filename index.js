import { parseCsvFile } from "./csv-reader/csv-reader.js";
import { displayTable } from "./table/table.js";

function getFilePath() {
  const args = process.argv.slice(2);
  const filename = args[0];

  if (!filename) {
    console.error("Missing filename.");
    return null;
  }

  return `./${filename}`;
}

const filename = getFilePath();

if (filename) {
  const data = parseCsvFile(filename);

  if (data) {
    displayTable(data);
  }
}
