import * as OpenAPI from "fumadocs-openapi";
import { rimrafSync } from "rimraf";

const out = "./src/content/docs/(API)";

rimrafSync(out, {
  filter(v) {
    return !v.endsWith("index.mdx") && !v.endsWith("meta.json");
  },
});

void OpenAPI.generateFiles({
  input: [
    "./scripts/openapi-schema/specific-api.json",
    "./scripts/openapi-schema/random-api.json",
  ],
  output: out,
  groupBy: "tag",
});
