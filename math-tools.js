// 함수 선언
let author = 'NodeJS teacher'

// Arrow Function
// A: function add(a, b) { return a + b; }
// B: (a, b) => { return a + b; }
// A === B

let calculator = {
    PI: 3.14,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

let test = {
    date: '2021-09-20',
    types: ['satetyTest', 'performanceTest'],
    printTypes() {
        for (const i in this.types) {
            console.log(this.types[i]);
        }
    }
}

// exports: 모델을 외부에 공개하기

// 사용방법
// exports.(변수 이름) = (함수이름)
// exports.author = author;
// exports.test = test;

// 여러개의 모델을 하나의 객체로 모아서 외부에 공개하기
// 사용방법
// module.exports = (변수 이름)

// 주의사항: module.exports는 한번만 호출 가능(가장 마지막에 호출된 module.exports 값이 공개됨.)
module.exports = calculator;
// module.exports = test;