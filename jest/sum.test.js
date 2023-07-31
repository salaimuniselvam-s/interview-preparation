const { sum } = require("./sum");

describe("sum test", () => {
  it("should return 3", () => {
    expect(sum(1, 3)).toBe(4);
  });
});
