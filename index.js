import { parseCsvFile } from "./csv-reader/csv-reader.js";
import { init as initMenu } from "./menu/menu.js";
import { displayTable } from "./table/table.js";
import { calculateLastPage, sliceData } from "./utils/utils.js";

const DEFAULT_ROWS_PER_PAGE = 3;

let currentPage = 0;

function getFilePath() {
  const args = process.argv.slice(2);
  const filename = args[0];

  if (!filename) {
    console.error("Missing filename.");
    return null;
  }

  return `./${filename}`;
}

function getRowsPerPage() {
  const args = process.argv.slice(2);

  if (args.length > 1) {
    const userRowsPerPage = parseInt(args[1], 10);

    if (userRowsPerPage > 0) {
      return userRowsPerPage;
    }
  }

  return DEFAULT_ROWS_PER_PAGE;
}

function displayFirstPage(data, rowsPerPage) {
  currentPage = 0;
  displaySelectedData(data, rowsPerPage);
}

function displayPreviousPage(data, rowsPerPage) {
  if (currentPage > 0) {
    currentPage--;
  }

  displaySelectedData(data, rowsPerPage);
}

function displayNextPage(data, rowsPerPage) {
  const lastPage = calculateLastPage(data.data, rowsPerPage);

  if (currentPage < lastPage) {
    currentPage++;
  }

  displaySelectedData(data, rowsPerPage);
}

function displayLastPage(data, rowsPerPage) {
  currentPage = calculateLastPage(data.data, rowsPerPage);
  displaySelectedData(data, rowsPerPage);
}

function onExit() {
  console.log("See ya!");
}

function displaySelectedData(data, rowsPerPage) {
  const selectedData = sliceData(data, currentPage * rowsPerPage, rowsPerPage);
  displayTable(selectedData);
}

async function main() {
  const filename = getFilePath();

  if (filename) {
    const data = parseCsvFile(filename);

    if (data) {
      const rowsPerPage = getRowsPerPage();

      displayFirstPage(data, rowsPerPage);

      await initMenu(
        () => displayFirstPage(data, rowsPerPage),
        () => displayPreviousPage(data, rowsPerPage),
        () => displayNextPage(data, rowsPerPage),
        () => displayLastPage(data, rowsPerPage),
        onExit
      );
    }
  }
}

main();
