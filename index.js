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
  currentPage = 0;
  displaySelectedData(data);
}

function displayPreviousPage(data) {
  if (currentPage > 0) {
    currentPage--;
  }

  displaySelectedData(data);
}

function displayNextPage(data) {
  const lastPage = calculateLastPage(data.data, rowsPerPage);

  if (currentPage < lastPage) {
    currentPage++;
  }

  displaySelectedData(data);
}

function displayLastPage(data) {
  currentPage = calculateLastPage(data.data, rowsPerPage);
  displaySelectedData(data);
}

function onExit() {
  console.log("See ya!");
}

function displaySelectedData(data) {
  const selectedData = sliceData(data, currentPage * rowsPerPage, rowsPerPage);
  displayTable(selectedData);
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
