import { expect, test, describe } from "bun:test";
import { Dollar, Franc } from ".";

describe("Dollars", () => {
  test("multiplication", () => {
    let five = new Dollar(5);

    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
  });

  test("equiality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTrue();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalse();
  });
});

describe("Francs", () => {
  test("multiplication", () => {
    let five = new Franc(5);

    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });
});
