export const jsonParserStringify = (json: Object) => {
  try {
    return JSON.stringify(json);
  } catch {
    console.error("failed to stringify json");
    return JSON.stringify({});
  }
};

export const jsonParser = (string: string) => {
  try {
    return JSON.parse(string);
  } catch {
    return "";
  }
};
