module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel"],
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@config": "./src/config",
            "@entities": "./src/entities",
            "@hooks": "./src/hooks",
            "@libs": "./src/libs",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            // modules
            "@auth": "./src/modules/auth",
            "@home": "./src/modules/home",
            "@train": "./src/modules/train",
            "@trip": "./src/modules/trip",
            "@stations": "./src/modules/stations",
            "@map": "./src/modules/map",
            "@menu": "./src/modules/menu",
            "@news": "./src/modules/news",
          },
        },
      ],
      [
        "babel-plugin-inline-import",
        {
          extensions: [".svg"],
        },
      ],
    ],
  };
};
