import { defineConfig } from "tinacms";
import { link_postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "91e4350d-0e69-454f-b10f-5c8e7a59b2ea", // Get this from tina.io
  token: "48b100a80119077c0ea172f513d91bfdf5a21b41", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [],
  },
});
