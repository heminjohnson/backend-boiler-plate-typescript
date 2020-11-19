import { dummyHelperTwo } from '../index'

describe("helpers", () => {
  test("Dummy Helper Two", () => {
    expect(dummyHelperTwo()).toEqual(true);
  });
});
