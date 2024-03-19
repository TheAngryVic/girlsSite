import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import vue from "@astrojs/vue";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), vue(), db()],
  output: "server",
  adapter: vercel()
});