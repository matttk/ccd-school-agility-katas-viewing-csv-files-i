function displayTable(data) {
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

function calculateMaxColumnLength(columns) {
  return columns.reduce((max, column) => {
    return Math.max(max, column.length);
  }, 0);
}

export { calculateColumnSizes, calculateMaxColumnLength, displayTable };
