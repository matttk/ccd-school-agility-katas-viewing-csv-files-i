import { readFile } from "./csv-reader.js";

describe("readFile", () => {
  it("returns a string", () => {
    const data = readFile("./persons.csv");

    expect(typeof data).toBe("string");
  });
});
