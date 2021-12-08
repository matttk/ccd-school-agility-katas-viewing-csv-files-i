function calculateLastPage(rows, rowsPerPage) {
  if (!rows || rows.length === 0) {
    return 0;
  }

  const numRows = rows.length;

  if (numRows % rowsPerPage === 0) {
    return numRows / rowsPerPage - 1;
  } else {
    return Math.floor(numRows / rowsPerPage);
  }
}

function sliceData(data, start, numRows) {
  if (!data || !data.data) {
    return null;
  }

  const rows = data.data.slice(start, start + numRows);

  return { ...data, data: rows };
}

export { calculateLastPage, sliceData };
