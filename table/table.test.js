import {
  calculateColumnSizes,
  calculateMaxColumnLength,
  displayTable,
  getRowString,
  getPaddedString,
} from "./table.js";

const DUMMY_DATA = {
  header: ["Name", "Age", "City"],
  data: [
    ["Peter", "42", "New York"],
    ["Paul", "57", "London"],
  ],
};

describe("displayTable", () => {
  describe("empty object", () => {
    it("outputs empty string", () => {
      const table = displayTable({});
      expect(table).toBe("");
    });
  });
});

describe("calculateMaxColumnLength", () => {
  describe("dog, cat, fish, Pizza Hut", () => {
    it("returns 9", () => {
      const length = calculateMaxColumnLength([
        "dog",
        "cat",
        "fish",
        "Pizza Hut",
      ]);
      expect(length).toBe(9);
    });
  });

  describe("dog, cat", () => {
    it("returns 3", () => {
      const length = calculateMaxColumnLength(["dog", "cat"]);
      expect(length).toBe(3);
    });
  });
});

describe("calculateColumnSizes", () => {
  it("gets correct column sizes", () => {
    const sizes = calculateColumnSizes(DUMMY_DATA.header, DUMMY_DATA.data);

    expect(sizes.length).toBe(3);
    expect(sizes[0]).toBe(5);
    expect(sizes[1]).toBe(3);
    expect(sizes[2]).toBe(8);
  });
});

describe("getPaddedString", () => {
  it("adds 3 spaces to dog, when maxSize === 6", () => {
    const paddedString = getPaddedString("dog", 6);
    expect(paddedString.length).toBe(6);
  });
});

describe("getRowString", () => {
  it("converts DUMMY_DATA header correctly, with max sizes 5, 6, 7", () => {
    const rowString = getRowString(DUMMY_DATA.header, [5, 6, 7]);
    expect(rowString).toBe("Name |Age   |City   |");
  });

  it("converts DUMMY_DATA row 1 correctly, with max sizes 5, 6, 7", () => {
    const rowString = getRowString(DUMMY_DATA.data[0], [5, 6, 7]);
    expect(rowString).toBe("Peter|42    |New York|");
  });
});
