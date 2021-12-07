export default {
  name: "profiles",
  title: "Profiles",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ title: "Block", type: "block" }],
      styles: [{ title: "Normal", value: "normal" }],
      list: [],
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ title: "Block", type: "block" }],
      styles: [{ title: "Normal", value: "normal" }],
      list: [],
    },
    {
      name: "street1",
      title: "Street 1",
      type: "string",
    },
    {
      name: "street2",
      title: "Street 2",
      type: "string",
    },
    {
      name: "street3",
      title: "Street 3",
      type: "string",
    },
    {
      name: "postCode",
      title: "Postcode",
      type: "string",
    },
    {
      name: "district",
      title: "District",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
};
