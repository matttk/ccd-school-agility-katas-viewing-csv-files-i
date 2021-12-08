import { parseCsvFile } from "./csv-reader/csv-reader.js";
import { init as initMenu } from "./menu/menu.js";
import { displayTable } from "./table/table.js";
import { calculateLastPage, sliceData } from "./utils/utils.js";

let currentPage = 0;
let rowsPerPage = 3;

function getFilePath() {
  const args = process.argv.slice(2);
  const filename = args[0];

  if (!filename) {
    console.error("Missing filename.");
    return null;
  }

  return `./${filename}`;
}

function displayFirstPage(data) {
  const selectedData = sliceData(data, 0, rowsPerPage);
  displayTable(selectedData);
}

function displayPreviousPage(data) {
  const selectedData = sliceData(data, 0, rowsPerPage);
  displayTable(selectedData);
}

function displayNextPage(data) {
  const selectedData = sliceData(data, 0, rowsPerPage);
  displayTable(selectedData);
}

function displayLastPage(data) {
  const lastPage = calculateLastPage(data.data, rowsPerPage);
  const selectedData = sliceData(data, lastPage * rowsPerPage, rowsPerPage);

  displayTable(selectedData);
}

function onExit() {
  console.log("See ya!");
}

async function main() {
  const filename = getFilePath();

  if (filename) {
    const data = parseCsvFile(filename);

    if (data) {
      displayFirstPage(data);

      initMenu(
        () => displayFirstPage(data),
        () => displayPreviousPage(data),
        () => displayNextPage(data),
        () => displayLastPage(data),
        onExit
      );
    }
  }
}

main();
