import type { TinaField } from "tinacms";
export function link_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "linkurl",
      label: "linkurl",
    },
  ] as TinaField[];
}
