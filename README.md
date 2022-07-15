# CssPackage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

# What for
This project is used to reproduce the problem that the imported css files that use **url() to introduce other media files** are packaged by **@angular-builders/custom-webpack** and **webpack** to output different URL reference results .

they both use **css-loader** to packaged css files.
```javascript
{
  test: /styles.css$/i,
  use: [
    {
      loader: "css-loader",
      options: {
        //   url:false
      },
    },
  ],
},
```

# What is
**@angular-builders/custom-webpack** with the custom config packaged file will use the **File://** to construct a URL 

**webpack** packaged file will use the **require** construct a URL

**@angular-builders/custom-webpack's** behavior leads to [https://github.com/webpack/webpack-dev-server/issues/1815#issuecomment-1182801823](https://github.com/webpack/webpack-dev-server/issues/1815#issuecomment-1182801823)

# How to reproduce
Just compare the two products packaged using the build command
* npm run build:ng
  Use **@angular-builders/custom-webpack** for packaging, the configuration is in the **angular.json**, and the attached custom configuration is in **build/custom-webpack.config.js**
  ```javascript
  //output
  new URL("./assets/ttk.ttf","file:///.../css-packaged/src/styles.css")
  ```

* npm run build:pure
  Use **webpack** for packaging, the configuration is in the **build/custom-webpack.config.js**
    ```javascript
  //output
  new URL(/* asset import */ __webpack_require__(/*! ./ttk.ttf */ \"./src/assets/ttk.ttf\")
  ```
