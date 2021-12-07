import {
  calculateColumnSizes,
  calculateMaxColumnLength,
  displayTable,
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
