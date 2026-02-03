const fs = require("fs");

// Read the file
let config = fs.readFileSync("gatsby-config.js", "utf8");

// Split into lines for precise removal
const lines = config.split("\n");
const result = [];
let skipMode = false;
let skipDepth = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Detect start of gatsby-remark-relative-images block
  if (line.includes("gatsby-remark-relative-images")) {
    skipMode = true;
    skipDepth = 0;
    continue;
  }

  if (skipMode) {
    // Count braces to track when the block ends
    for (const char of line) {
      if (char === "{") skipDepth++;
      if (char === "}") skipDepth--;
    }

    // If we close all braces and hit a }, skip this line too and end skip mode
    if (line.trim() === "},") {
      skipMode = false;
      continue;
    }
    continue;
  }

  result.push(line);
}

fs.writeFileSync("gatsby-config.js", result.join("\n"));
console.log("Successfully removed gatsby-remark-relative-images plugin");
