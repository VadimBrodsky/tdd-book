import { expect, test } from "bun:test";
import { Dollar } from ".";

test("multiplication", () => {
  let five = new Dollar(5);
  let product = five.times(2);

  expect(product.amount).toEqual(10);

  product = five.times(3);
  expect(product.amount).toEqual(15);
});

test("equiality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTrue();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalse();
});
