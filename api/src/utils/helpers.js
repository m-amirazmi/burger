export const toSlug = (string) => {
  // Remove special characters using regex
  let formattedString = string.replace(/[^\w\s]/gi, "");

  // Replace spaces with underscores and convert to lowercase
  formattedString = formattedString.replace(/\s+/g, "_").toLowerCase();

  return formattedString;
};
