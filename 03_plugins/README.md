# Plugins

- MiniCssExtractPlugin
- https://webpack.js.org/plugins/mini-css-extract-plugin/
- npm install -D mini-css-extract-plugin

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```

Inside index.html

```html
<link rel="stylesheet" href="../dist/styles.css" />
```

- TerserPlugin
- https://webpack.js.org/plugins/terser-webpack-plugin/
- npm install -D terser-webpack-plugin

```javascript
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

- DefinePlugin
- https://webpack.js.org/plugins/define-plugin/

```javascript
const webpack = require("webpack");

new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(!isDevelopment),
  PORT: JSON.stringify(8000),
  TEXT_EXAMPLE: JSON.stringify("Webpack!"),
  VERSION: JSON.stringify("5fa3b9"),
});

// usage
console.log(PRODUCTION);
console.log(PORT);
console.log(TEXT_EXAMPLE);
console.log(VERSION);
```

- DotenvPlugin
- https://www.npmjs.com/package/dotenv-webpack
- npm install -D dotenv-webpack

```javascript
const DotenvPlugin = require("dotenv-webpack");

new DotenvPlugin(),
```

- HtmlWebpackPlugin
- https://webpack.js.org/plugins/html-webpack-plugin/
- npm install -D html-webpack-plugin

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
new HtmlWebpackPlugin(),
```

- Solving cache problems and leftovers
- [name].[contenthash].extension
- CleanWebpackPlugin
- https://www.npmjs.com/package/clean-webpack-plugin
- npm install -D clean-webpack-plugin

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
new CleanWebpackPlugin(),
```
