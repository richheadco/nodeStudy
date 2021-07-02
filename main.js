// 파일 요청
// require('파일 경로') - 이때도 파일명에 js를 생략가능
// ./ = 현재 디렉토리(현재 파일 기준)
// ../ = 부모 디렉토리(현재 파일 기준)
// require함수 사용시 변수선언 주의사항
// let 보다는 const사용 권장: 실수로 같은 변수를 사용 방지 효과
let m = require('./math-tools.js');

// math-tools.js 파일에서 exports한 변수명 사용 
// console.log(m.author);
// console.log(m.date);
// console.log(m.types);
// m.printTypes();

console.log(m.PI);
console.log(m.add(2, 4));
console.log(m.subtract(1, 2));
console.log(m.multiply(1, 2));
console.log(m.divide(1, 2));