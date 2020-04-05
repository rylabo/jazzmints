import "jasmine";
import * as js from "./inc.js";

describe("jazzmints", () => {

  it("should work with TypeScript files", () => {
    expect(true).toBe(true);
  });

  it("should parse --compilerOptions properly", () => {
    expect(js).toBe(true);
  });

});
