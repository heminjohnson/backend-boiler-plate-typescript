import { dummyHelperOne } from '../index'

describe("helpers", () => {
  test("Dummy Helper One", () => {
    expect(dummyHelperOne()).toEqual(true);
  });
});
