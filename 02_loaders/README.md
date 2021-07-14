# Loaders

- npm install style-loader css-loader node-sass sass-loader

```javascript
module: {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
    ],
},
```

- npm install -D file-loader

inside rules:

```javascript
{
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: {
        loader: "file-loader",
        options: {
            outputPath: './imgs/',
        }
    }
},
```

- npm install -D babel-loader @babel/core @babel/preset-env

inside rules:

```javascript
{
    test: /\.(j|t)s$/,
    exclude: /(node_modules)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"],
        }
    }
},
```

- npm install -D html-loader

inside rules:

```javascript
{
    test: /\.html$/,
    use: "html-loader",
},
```

- npm install -D raw-loader

inside rules:

```javascript
{
    test: /\.txt$/,
    use: "raw-loader",
},
```
