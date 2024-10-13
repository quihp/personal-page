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
      token:
        "skCOatXu3WN0Qv9iC7rIrNfzYhycKXZhGkto03WAElI8G47HpWpM5oAtaOVdRrgvRPR4vgikNzT0eKcKnHOmCHEpMm3svbuem1Fb4ZXyjaFp49TFcUhVNZGQfD9X9DOzxbkk8OiwbEY3csF5LQyBLxR716cy3hhcL751lvG2AKljLvnQqP8Q",
    }),
  ],
  output: 'static',
  outDir: './docs',
});
