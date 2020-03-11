const path = require("path");
module.exports = {
  entry: "./src/code.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "code.bundle.js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  optimization: { minimizer: [] },
};

/*
entry : webpack으로 번들링 할 파일
output : 번들링 결과를 ./dist/code.bundle.js 로 저장한다.
module: 자바스크립트 파일을 babel-loader가 처리하도록 한다.
        babel-loader는 바벨의 설정파일을 이용하므로 이전에 만들어 놓은 babel.config.js의 설정값을 사용한다.
optimization : 웹팩은 기본적으로 자바스크립트 파일을 압축한다. 하지만 바벨의 정상 동작 유뮤 확인을 위해 잠시 끄도록 한다.
*/
