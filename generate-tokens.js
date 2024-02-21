// const StyleDictionary = require("style-dictionary");
// const customProcessVariables = require("./custom-process-variables");

// StyleDictionary.registerTransform({
//   name: "customProcessVariables",
//   type: "value",
//   transformer: customProcessVariables,
// });

// const config = {
//   source: ["./tokens/light.json", "./tokens/dark.json"],
//   platforms: {
//     react: {
//       transformGroup: "web",
//       buildPath: "build/web/",
//       files: [
//         {
//           format: "javascript/es6",
//           destination: "tokens.js",
//         },
//       ],
//       transforms: {
//         customProcessVariables: "./",
//       },
//     },
//     light: {
//       transformGroup: "web",
//       buildPath: "build/css/",
//       files: [
//         {
//           format: "css/variables",
//           destination: "variables-light.css",
//         },
//       ],
//     },
//     dark: {
//       transformGroup: "web",
//       buildPath: "build/css/",
//       files: [
//         {
//           format: "css/variables",
//           destination: "variables-dark.css",
//         },
//       ],
//     },
//   },
// };

// StyleDictionary.extend(config)
//   .registerTransform(
//     StyleDictionary.transform({
//       name: "web",
//       type: "value",
//       matcher: (prop) => prop.attributes.category === "color",
//       transformer: (prop) => {
//         return prop.value.toUpperCase();
//       },
//     })
//   )
//   .buildAllPlatforms();
