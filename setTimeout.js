let num = 1;

// setTimeout(callback, milliseconds) 함수
// setTimeout(콜백함수, 시간) 입력하여 사용한다.
setTimeout(() => {
    num = 2;
}, 1000);

num = 3;

console.log(num);