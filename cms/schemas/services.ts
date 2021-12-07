export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ title: "Block", type: "block" }],
      styles: [{ title: "Normal", value: "normal" }],
      list: [],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
