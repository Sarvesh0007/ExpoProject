module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // if you use expo-router, keep its plugin too:
    // plugins: ["expo-router/babel"],
  };
};
