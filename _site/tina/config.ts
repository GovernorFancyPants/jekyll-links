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
    collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: '_posts',
        defaultItem: () => {
          return {
            // When a new post is created the layout field will be set to "article"
            layout: 'article',
          }
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          { 
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: "object",
            name: "image",
            label: "Cover image",
            required: true,
            fields: [
              {
                type: "image",
                name: "feature",
                label: "Feature",
                required: true,
              },
              {
                type: "image",
                name: "teaser",
                label: "Thumbnail",
                required: true,
              },
            ],
          },
          { 
            type: "string",
            name: "categories",
            label: "Categories",
          },
          { 
            type: "boolean",
            name: "ads",
            label: "Ads",
          },
          { 
            type: "boolean",
            name: "comments",
            label: "Comments",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            type: "string",
            name: "introduction",
            label: "Introduction",
          },
        ],
      },
    ],
  },
});
