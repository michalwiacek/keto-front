module.exports = {
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  moduleNameMapper:{
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|jpg|png|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};