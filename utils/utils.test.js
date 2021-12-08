import { calculateLastPage } from "./utils.js";

const PAGE_SIZE = 3;

describe("calculateLastPage", () => {
  it("works for no data", () => {
    const lastPage = calculateLastPage(null, PAGE_SIZE);
    expect(lastPage).toBe(0);
  });

  it("works for no empty array", () => {
    const lastPage = calculateLastPage([], PAGE_SIZE);
    expect(lastPage).toBe(0);
  });

  it("works for 1 row", () => {
    const lastPage = calculateLastPage(["dog"], PAGE_SIZE);
    expect(lastPage).toBe(0);
  });

  it("works for 2 rows", () => {
    const lastPage = calculateLastPage(["dog", "cat"], PAGE_SIZE);
    expect(lastPage).toBe(0);
  });

  it("works for 3 rows", () => {
    const lastPage = calculateLastPage(["dog", "cat", "fish"], PAGE_SIZE);
    expect(lastPage).toBe(0);
  });

  it("works for 4 rows", () => {
    const lastPage = calculateLastPage(
      ["dog", "cat", "fish", "donkey"],
      PAGE_SIZE
    );
    expect(lastPage).toBe(1);
  });

  it("works for 6 rows", () => {
    const lastPage = calculateLastPage(
      ["dog", "cat", "fish", "donkey", "tiger", "giraffe"],
      PAGE_SIZE
    );
    expect(lastPage).toBe(1);
  });

  it("works for 7 rows", () => {
    const lastPage = calculateLastPage(
      ["dog", "cat", "fish", "donkey", "tiger", "giraffe", "monkey"],
      PAGE_SIZE
    );
    expect(lastPage).toBe(2);
  });
});
