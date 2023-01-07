import { withXcodeProject } from "expo/config-plugins";

const config = {
  expo: {
    name: "xcode-test",
    slug: "xcode-test",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.example.xcode-test",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};

const withCustomProductName = (config, customName) => {
  return withXcodeProject(config, async (config) => {
    const xcodeProject = config.modResults;
    xcodeProject.productName = customName;

    return config;
  });
};

export default withCustomProductName(config, "new_name");