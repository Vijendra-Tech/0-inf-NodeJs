// File system in nodes
import { readFile, writeFile } from "fs/promises";

let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);
// console.log(template);

const tempData = {
  title: "Learn 0-1 Node.js",
  body: "Beginner to Advance guide",
};

for (const [k, v] of Object.entries(tempData)) {
  template = template.replace(`{${k}}`, v);
}

await writeFile(new URL("index.html", import.meta.url), template);
