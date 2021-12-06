Starter Kit for React with Typescript

Dependencies
    npm install react react-dom typescript @types/react @types/react-dom --save

Dev Dependencies
    npm install webpack-cli webpack ts-loader --save-

package.json
{
    "name": "Porfolio",
    "version": "1.0.0",
    "private": true,
    "main": "index.tsx",
    "scripts": {
        "build": "tsc -p .",
        "watch": "tsc -p . -w",
        "build": "webpack",
        "watch": "webpack -w"
    },
    "dependencies": {
        "@types/react": "^17.0.37",
        "@types/react-dom": "^17.0.11",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "typescript": "^4.5.2"
    },
    "devDependencies": {
        "ts-loader": "^9.2.6",
        "webpack": "^5.64.4",
        "webpack-cli": "^4.9.1"
    }
}

webpack.config.js
"use strict";

const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
