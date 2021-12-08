import { parseCsvFile } from "./csv-reader/csv-reader.js";
import { displayTable } from "./table/table.js";
import { init as initMenu } from "./menu/menu.js";

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
  displayTable(data);
}

function displayPreviousPage(data) {
  displayTable(data);
}

function displayNextPage(data) {
  displayTable(data);
}

function displayLastPage(data) {
  displayTable(data);
}

function onExit() {
  console.log("See ya!");
}

async function main() {
  const filename = getFilePath();

  if (filename) {
    const data = parseCsvFile(filename);

    if (data) {
      displayTable(data);

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
