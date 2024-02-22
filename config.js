const StyleDictionary = require("style-dictionary");
const { formatHelpers } = StyleDictionary;
const { fileHeader } = require("style-dictionary/lib/common/formatHelpers");
const StyleDictionaryPackage = require("style-dictionary");
const JsonToTS = require("json-to-ts");

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
  transforms: ["name/cti/camel", "size/remToPx", "color/hex"],
});

module.exports = {
  source: ["./tokens/token.json"],
  parsers: [
    {
      pattern: /\.json$|\.tokens\.json$|\.tokens$/,
      parse: ({ contents }) => {
        // replace $value with value so that style dictionary recognizes it
        const preparedContent = (contents || "{}")
          .replace(/"\$?value"\s*:/g, '"value":')
          .replace(/"\$?description"\s*:/g, '"comment":')
          .replace(/"\$?type"\s*:/g, '"type":');
        return JSON.parse(preparedContent);
      },
    },
  ],

  platforms: {
    ts: {
      transformGroup: "ts",
      buildPath: "components/themes/",
      files: [
        {
          format: "javascript/accurate-module-declarations",
          // https://github.com/amzn/style-dictionary/issues/257
          // format: "javascript/module-flat",
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
