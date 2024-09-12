import { expect, test, describe } from "bun:test";
import { Dollar, Franc, Money } from ".";

describe("Dollars", () => {
  test("multiplication", () => {
    let five = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test("equiality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTrue();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalse();
    expect(Money.dollar(5).equals(Money.franc(5))).toBeFalse();
  });
});

describe("Francs", () => {
  test("multiplication", () => {
    let five = Money.franc(5);

    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  test("equiality", () => {
    expect(Money.franc(5).equals(Money.franc(5))).toBeTrue();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalse();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalse();
  });
});

test("Currency", () => {
  expect(Money.dollar(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
});
