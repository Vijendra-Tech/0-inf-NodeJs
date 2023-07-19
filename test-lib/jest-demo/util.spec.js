const { getNewUser, mapObjectToArray } = require("./util");

describe("mapObjecttoArray", () => {
  test("map obj values to array", () => {
    const result = mapObjectToArray(
      { type: "Veg", addOns: "Cheese" },
      (k, v) => {
        return v;
      }
    );
    expect(result).toEqual(["Veg", "Cheese"]);
  });
  test("callback should  get called", () => {
    const mockCb = jest.fn();
    const result = mapObjectToArray({ type: "Veg", addOns: "Cheese" }, mockCb);
    expect(mockCb.mock.calls.length).toBe(2);
  });
});
describe("Async Test", () => {
  test("it gets user", async () => {
    const user = await getNewUser(1);
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
  });
  test("user not found", async () => {
    expect.assertions(1);
    try {
      const user = await getNewUser(322);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
