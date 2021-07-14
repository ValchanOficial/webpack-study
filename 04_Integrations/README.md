# Integrations

- jQuery: npm install -D jquery

- Google Fonts:
- - Download fonts
- - woff, woff2 https://onlinefontconverter.com/
- - fonts.css

```css
@font-face {
  font-family: "Roboto";
  font-weight: 300;
  src: url("./fonts/Roboto-Regular.ttf"), url("./fonts/Roboto-Regular.woff2"),
    url("./fonts/Roboto-Regular.woff");
}
```

- - Webpack: npm install -D style-loader css-loader url-loader

```javascript
rules: [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(ttf|woff|woff2)$/,
    loader: "url-loader",
  },
];
```

- Font Awesome
- - npm install -D @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons

```javascript
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCode } from "@fortawesome/free-solid-svg-icons";

library.add(faCode);
dom.watch();
```

```html
<i class="fa fa-code" aria-hidden="true"></i>
```

- Bootstrap

- npm install -D bootstrap jquery @popperjs/core node-sass sass-loader

index.js

```javascript
import "./index.css";
import "bootstrap";
```

index.css

```css
@import "~bootstrap/scss/bootstrap";
```

index.html

```html
<div class="alert alert-primary" role="alert">Bootstrap!</div>
```

- Bulma

- npm install -D bulma css-loader mini-css-extract-plugin node-sass sass-loader style-loader webpack webpack-cli

- webpack

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

rules: [
  {
    test: /\.(sa|sc)ss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

plugins: [
  new MiniCssExtractPlugin({
    filename: "styles.css",
  }),
];
```

- css/styles.scss

```css
@charset 'utf-8';
@import "~bulma/bulma";
```

- index.js

```javascript
require("./css/styles.scss");
```

- ReactJS

- npm install -D react react-dom webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react babel-loader style-loader css-loader

.babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Safari versions",
            "last 2 iOS versions",
            "last 1 Android versions",
            "last 1 ChromeAndroid versions",
            "ie 11"
          ]
        }
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

- webpack

```javascript
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],
};
```

- Template html public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

- App.js and index.js

```javascript
// App.js
import React from "react";
import "./app.css";

export const App = () => {
  return <h1>ReactJS</h1>;
};
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

- Typescript + Express
- npm i -D typescript ts-loader webpack webpack-cli express @types/express

webpack.config.js

```javascript
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
```

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```
