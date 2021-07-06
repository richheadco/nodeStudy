// nodemon 패키지를 이용하면 서버를 종료하지 않고도 수정된 데이터를 업데이트 해준다.
// 실행방법: [터미널] - ['nodemon express.js(파일이름)' 입력]

// 클라이언트와 서버가 통신하는데 필요한 코어 모듈
const http = require('http');

const users = ['Tom', 'Andy', 'Jessica', 'Paul', 'Sally'];

// express 모듈 불러오기
const express = require('express');

// express 모듈로 객체 만들기
const app = express();

app.get('/', (req, res) => {
    res.end('Welcome!');
});

app.get('/users', (req, res) => {
    res.end(`<h1>${users}</h1>`);
});

// :id === 이 위치에 오는 값을 id라는 속성에 담으라는 의미
app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const userName = users[req.params.id - 1];
    res.end(`<h1>${userName}</h1>`);
});

// '*'의 의미 === 모든 path를 의미(순서 중요!)
app.get('*', (req, res) => {
    res.end('<h1>Page Not Available</h1>');
});

app.listen(3000);