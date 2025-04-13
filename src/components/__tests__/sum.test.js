import { sum } from "../sum";

test("sum of 2 numbers", () => {
  const res = sum(2, 2);
  expect(res).toBe(4);
});
