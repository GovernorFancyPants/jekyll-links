import { defineConfig } from "tinacms";
import { link_postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "91e4350d-0e69-454f-b10f-5c8e7a59b2ea", // Get this from tina.io
  token: "daea12abedbf2016d52cd4f80a0780950fdb48dc", // Get this from tina.io
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
    collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: '_posts',
        defaultItem: () => {
          return {
            // When a new post is created the layout field will be set to "post"
            layout: 'post',
          }
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.date?.toString().replace(/T.*$/,"")}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          { 
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          { 
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Cover image",
            required: true,
          },
          {
            type: "string",
            name: "linkurl",
            label: "Link URL",
            required: true,
          },
        ],
      },
    ],
  },
});
