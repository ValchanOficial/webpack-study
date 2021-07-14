# Initial Config, Concepts and Modes

- npm install webpack webpack-cli
- npx webpack

- create webpack.config.js
- set mode, entry and output:

```javascript
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

- script: "build":"webpack"

https://webpack.js.org/configuration/#options
