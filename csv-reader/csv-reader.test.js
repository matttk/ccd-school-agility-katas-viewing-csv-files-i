import {
  parseFileData,
  parseLine,
  readFile,
  splitStringByNewlines,
} from "./csv-reader.js";

describe("readFile", () => {
  it("returns a string", () => {
    const data = readFile("./persons.csv");
    expect(typeof data).toBe("string");
  });
});

describe("splitStringByNewlines", () => {
  it("returns array of length 3 for hello\\nworld\\n!", () => {
    const array = splitStringByNewlines("hello\nworld\n!");
    expect(array).toHaveLength(3);
  });
});

describe("parseLine", () => {
  it("a;b;c returns array of length 3", () => {
    const array = parseLine("a;b;c");
    expect(array).toHaveLength(3);
  });
});

describe("parseFileData", () => {
  describe("empty string", () => {
    it("returns empty object", () => {
      const data = parseFileData("");
      expect(data).toStrictEqual({});
    });
  });

  describe("some space", () => {
    it("returns empty object", () => {
      const data = parseFileData(" ");
      expect(data).toStrictEqual({});
    });
  });

  describe("Name;Age;City\\nPeter;42;New York\\nPaul;57;London", () => {
    it("returns header with first line and data with second and third lines, each with array of size 3", () => {
      const data = parseFileData(
        "Name;Age;City\nPeter;42;New York\nPaul;57;London"
      );

      expect(Array.isArray(data.header)).toBe(true);
      expect(data.header).toHaveLength(3);
      expect(Array.isArray(data.data)).toBe(true);
      expect(data.data).toHaveLength(2);
      expect(data.data[0]).toHaveLength(3);
      expect(data.data[1]).toHaveLength(3);
      expect(data).toStrictEqual({
        header: ["Name", "Age", "City"],
        data: [
          ["Peter", "42", "New York"],
          ["Paul", "57", "London"],
        ],
      });
    });
  });
});
