import { multiply } from "./hwlib.mjs";
import assert from "assert";

console.log("multiply()\n Should work");

try {
  assert.strictEqual(multiply(1, 2), 2);
  console.log("SUCCESS");
} catch (error) {
  console.log("FAIL");
  console.error(error);
}
