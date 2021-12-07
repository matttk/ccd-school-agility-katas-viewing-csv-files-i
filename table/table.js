const VERTICAL_SEPARATOR = "|";
const HORIZONTAL_SEPARATOR = "-";
const HORIZONTAL_COLUMN_SEPARATOR = "+";

function displayTable(data) {
  const tableString = getTableString(data);

  console.log(tableString);
}

function getTableString(data) {
  let tableString = "";

  if (!data || !data.header || !data.data) {
    return tableString;
  }

  const columnSizes = calculateColumnSizes(data.header, data.data);

  tableString = tableString + getRowString(data.header, columnSizes) + "\n";
  tableString = tableString + getHeaderSeparator(columnSizes) + "\n";

  data.data.forEach((row) => {
    tableString = tableString + getRowString(row, columnSizes) + "\n";
  });

  return tableString;
}

function calculateColumnSizes(header, data) {
  return header.reduce((sizes, columnHeader, index) => {
    const columnData = data.map((columnData) => columnData[index]);
    const allStrings = [columnHeader, ...columnData];
    const max = calculateMaxColumnLength(allStrings);

    sizes.push(max);

    return sizes;
  }, []);
}

function getRowString(row, columnSizes) {
  return row.reduce((string, cell, index) => {
    return (
      string + getPaddedString(cell, columnSizes[index]) + VERTICAL_SEPARATOR
    );
  }, "");
}

function getHeaderSeparator(columnSizes) {
  let string = "";

  columnSizes.forEach((size) => {
    string =
      string + HORIZONTAL_SEPARATOR.repeat(size) + HORIZONTAL_COLUMN_SEPARATOR;
  });

  return string;
}

function calculateMaxColumnLength(columns) {
  return columns.reduce((max, column) => {
    return Math.max(max, column.length);
  }, 0);
}

function getPaddedString(string, maxSize) {
  const paddingNeeded = maxSize - string.length;
  const padding = paddingNeeded > 0 ? " ".repeat(paddingNeeded) : "";
  const paddedString = string + padding;

  return paddedString;
}

export {
  calculateColumnSizes,
  calculateMaxColumnLength,
  displayTable,
  getTableString,
  getRowString,
  getPaddedString,
};
