// 비동기 프로그래밍과 이벤트
// 이벤트: node.js에서 제공하는 코어 모듈은 대부분 객체가 event 함수 기반으로 쓰여져 있다.

// 코어 모듈 불러오기
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const myEmitter1 = new EventEmitter();


myEmitter.on('test', () => {
    console.log('1');
});

myEmitter.on('test', () => {
    console.log('2');
});

myEmitter.on('test', () => {
    console.log('3');
});

// myEmitter는 같은 해당 객체 내에 선언된 함수만 실행한다.
// 따라서 프로그램 실행시, 아래 함수는 실행되지 않는다.
myEmitter1.on('test', () => {
    console.log('4');
});

myEmitter.on('test', () => {
    console.log('Success!');
});

// once 메소드
// 이벤트 핸들러가 해당 이벤트에 대해서 딱 한 번만 반응해서 실행되도록 한다
myEmitter.once('test', () => {
    console.log('this is once method');
});

myEmitter.emit('test');
myEmitter.emit('test');

// listeners 메소드
// 특정 이벤트에 대한 이벤트 핸들러들을 출력해주는 메소드
console.log(myEmitter.listeners('test'));

// off 메소드
// 이벤트 핸들러를 해제하는 메소드
const cbArr = [];

cbArr[0] = () => {
    console.log('A');
};

cbArr[1] = () => {
    console.log('B');
};

myEmitter.on('test', cbArr[0]);
myEmitter.on('test', cbArr[1]);

myEmitter.off('test', cbArr[0]);
myEmitter.off('test', cbArr[1]);

myEmitter.emit('test');

const obj = { type: 'text', data: 'hello', date: '2021-09-01' };

myEmitter.on('test', (info) => {
    console.log(info);
});

myEmitter.emit('test', obj);