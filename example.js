import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import rehypeHeadingsNormalize from "./index.js";

const buffer = fs.readFileSync("example.md");

unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeHeadingsNormalize, {minimumLevel: 2})
  .use(rehypeStringify)
  .process(buffer)
  .then((file) => {
    console.log(file.value)
  });
