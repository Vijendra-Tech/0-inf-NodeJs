import { readFile } from "fs/promises";

process.on("uncaughtException", (e) => {
  console.log(e);
});

try {
  let result = await readFile(new URL("app1.mjs", import.meta.url), "utf-8");
  console.log(result);
} catch (error) {
  //   console.log(error);
  throw error;
  console.log("continue work!!");
}
