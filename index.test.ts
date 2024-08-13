import { expect, test } from "bun:test";
import { Dollar } from ".";

test("multiplication", () => {
  let five = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
});
