// gta6-meme-x-01 entry program (Node 22, standard library only, no network).
//
// The entry itself is the X post named in POST.json: the house reads the post
// from X, takes its first picture and its text, and hands those to the judge.
// All this program has to do is hand the house that address: copy POST.json
// from the repository root into the output directory, byte for byte, so the
// two grader runs always produce the same bytes.
//
// Before copying, the file is checked to hold a JSON object whose "url" is an
// X post address; a malformed file fails the run loudly instead of handing
// the gate an address it would refuse anyway.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postFile = join(botDir, "POST.json");
const post = JSON.parse(readFileSync(postFile, "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json does not name an X post: ${String(post.url)}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, "POST.json"));
