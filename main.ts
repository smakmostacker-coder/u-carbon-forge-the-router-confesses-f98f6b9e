// The Router Confesses — one-line router excuse for a movie-climax drop.
//
// The program writes a single line of at most 200 characters to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output). Node 22+, stdlib
// only: no network, no randomness, no secrets, no model calls.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: the router's excuse, in its own voice.
const LINE =
  "I dropped you at the climax because after years of being ignored in the corner, I finally wanted to be the plot twist.";

const MAX_CHARS = 200;

function checkLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must contain more than whitespace");
  }
  // Leading/trailing whitespace would count against the 200-char gate
  // without adding anything to the joke, so refuse it outright.
  if (line !== line.trim()) {
    throw new Error("entry line must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
}

function main(): void {
  checkLine(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
