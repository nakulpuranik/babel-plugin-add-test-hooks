module.exports = {
  extends: ["prettier", "prettier/react"],
  parser: "babel-eslint",
  plugins: ["react", "react-native", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "React"
      }
    ],
    "react/jsx-uses-vars": "error",
    semi: ["warn", "always"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "prettier/prettier": "error",
    "no-confusing-arrow": "warn",
    "no-unexpected-multiline": "error",
    "max-len": [
      "error",
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true
      }
    ]
  }
};
