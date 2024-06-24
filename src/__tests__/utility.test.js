import { describe, expect, it } from "vitest";
import { calculateTotal, toTitleCase } from "../utility/utility";

describe("toTitleCase utility function", () => {
  it("works with all lowercase string", () => {
    expect(toTitleCase("hello")).toBe("Hello");
  });

  it("works with camelCase string", () => {
    expect(toTitleCase("helloWorld")).toBe("Helloworld");
  });

  it("only title cases the first word in a sentence", () => {
    expect(toTitleCase("this is just a tribute")).toBe(
      "This is just a tribute"
    );
  });

  it("works when string starts with whitespace", () => {
    expect(toTitleCase("     hello")).toBe("Hello");
  });

  it("numbers are ignored", () => {
    expect(toTitleCase("49")).toBe("49");
  });
});

describe("calculateTotal utility function", () => {
  const items = [
    { price: 15, amount: 2 },
    { price: 48.89, amount: 6 },
    { price: 109.95, amount: 1 },
    { price: 55.99, amount: 3 },
  ];

  it("calculates the right total", () => {
    expect(calculateTotal(items)).toBe("601.26");
  });
});
