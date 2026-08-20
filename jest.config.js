import { TestEnvironment } from "jest-environment-jsdom";

export default {
  TestEnvironment: "jsdom",
  setupFilesAfterFramework: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transfomr: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
