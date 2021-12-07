const VERTICAL_SEPARATOR = "|";

function displayTable(data) {
  if (!data || !data.header || !data.data) {
    return "";
  }

  const columnSizes = calculateColumnSizes(data.header, data.data);
  return "";
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
  getRowString,
  getPaddedString,
};
