import "dotenv/config";

let envs = {
  APP_ENV: "development",
  API_URL: "",
  eas: {
    projectId: "b1bcbd7d-f81e-4869-9ef6-0f27d1e9bc92",
  },
};

if (process.env.ENVIRONMENT === "production") {
  envs = {
    APP_ENV: "production",
    API_URL: "",
    eas: {
      projectId: "b1bcbd7d-f81e-4869-9ef6-0f27d1e9bc92",
    },
  };
}

module.exports = ({ config }) => {
  return {
    ...config,
    version: process.env.APP_VERSION || "1.0.0",
    extra: {
      ...envs,
    },
  };
};
