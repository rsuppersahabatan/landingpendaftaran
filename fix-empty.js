const fs = require("fs");

let config = fs.readFileSync("gatsby-config.js", "utf8");
let lines = config.split(/\r?\n/);

// Find and remove empty object at lines 77-78
const filtered = [];
for (let i = 0; i < lines.length; i++) {
  // Skip empty object {}
  if (
    lines[i].trim() === "{" &&
    i + 1 < lines.length &&
    lines[i + 1].trim() === "},"
  ) {
    // Check if this is part of the plugins array
    if (i > 0 && lines[i - 1].includes("plugins: [")) {
      i++; // Skip the next line too
      continue;
    }
  }
  filtered.push(lines[i]);
}

fs.writeFileSync("gatsby-config.js", filtered.join("\n"));
console.log("Fixed gatsby-config.js");
