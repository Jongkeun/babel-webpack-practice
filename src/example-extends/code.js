// react 프리셋을 이용하여 JSX 문법 변환
const element = <div>babel test</div>;
// template-literals 플러그인을 이용하여 템플릿 리터럴 코드를 변환
const text = `element type is ${element.type}`;
// arrow-function 플러그인을 이용하여 화살표 함수 변환
const add = (a, b) => a + b;

/*
// @babel/cli를 이용해서 컴파일
npx babel src/code.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions 
 */
