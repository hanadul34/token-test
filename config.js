const StyleDictionary = require("style-dictionary");
const { formatHelpers } = StyleDictionary;
const { fileHeader } = require("style-dictionary/lib/common/formatHelpers");
const StyleDictionaryPackage = require("style-dictionary");
const JsonToTS = require("json-to-ts");

StyleDictionary.registerTransform({
  name: "attribute/cti",
  type: "attribute",
  transformer: (prop) => {
    const originalName = prop.original.name || "";
    return originalName.toLowerCase().replace(/^\$/, "");
  },
});

StyleDictionaryPackage.registerFormat({
  name: "typescript/accurate-module-declarations",

  formatter: function ({ dictionary }) {
    const testToken = formatHelpers.minifyDictionary(dictionary.tokens);
    const interfaceDefinitions = JsonToTS(testToken).map(
      (definition) => `export ${definition}`
    );
    return (
      "declare const root: RootObject\n" +
      "export default root\n" +
      interfaceDefinitions.join("\n")
    );
  },
});

StyleDictionaryPackage.registerFormat({
  name: "javascript/accurate-module-declarations",
  formatter: function ({ dictionary, file }) {
    const testToken = formatHelpers.minifyDictionary(dictionary.tokens);
    return (
      fileHeader({ file }) +
      "module.exports = " +
      JSON.stringify(testToken, null, 2) +
      ";\n"
    );
  },
});

StyleDictionary.registerTransformGroup({
  name: "ts",
  transforms: ["attribute/cti", "size/remToPx", "color/hex", "name/ti/camel"],
});

module.exports = {
  source: ["./tokens/token.json"],
  transformer: (prop, options) => {
    return prop.name.replace(/^\$/, "");
  },
  format: {
    myCustomFormat: ({ dictionary }) => {
      return JSON.stringify(
        formatHelpers.minifyDictionary(dictionary.tokens),
        null,
        2
      );
    },
  },

  platforms: {
    ts: {
      transformGroup: "ts",
      buildPath: "components/themes/",
      files: [
        {
          format: "javascript/accurate-module-declarations",
          destination: "tokens.js",
        },
        {
          format: "typescript/accurate-module-declarations",
          destination: "tokens.d.ts",
        },
      ],
    },
  },
};
