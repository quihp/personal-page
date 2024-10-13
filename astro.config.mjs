// @ts-check
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import dotenv from "dotenv";

dotenv.config();
// https://astro.build/config
export default defineConfig({
  server: {
    port: 3333,
    host: true,
    open: true,
  },
  integrations: [
    sanity({
      projectId: "wu24s11i",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      //   useCdn: false,
    }),
  ],
  output: 'static',
  outDir: './docs',
});
