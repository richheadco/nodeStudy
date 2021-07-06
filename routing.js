// 클라이언트와 서버가 통신하는데 필요한 코어 모듈
const http = require('http');

const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

// 서버 역할을 하는 객체를 생성한다.
const server = http.createServer(
    // req: 클라이언트 요청에 관한 객체
    // res: 서버가 할 응답에 관한 객체
    // Arrow Function
    // (req, res) => {
    function(req, res) {
        if (req.url === '/') {
            res.end('<h1>Welcome!</h1>');
        } else if (req.url === '/users') {
            res.end('<h1>' + users + '</h1>');
        } else if (req.url.split('/')[1] === 'users') {

            // url : /users/1, /users/2, ...
            // url을 split으로 '/'을 기준으로 쪼개서 배열로 만들어 Control.
            const userIdx = req.url.split('/')[2];
            const userName = users[userIdx - 1];

            // res.end('<h1>' + userName + '</h1>');
            res.end(`<h1>${userName}</h1>`);
        } else {
            res.end('<h1>Page Not Available</h1>');
        }
    }
);

// 클라이언트 요청 듣기
// server.listen(포트 번호)
const PORT = 3000;
server.listen(PORT);

// 127.0.0.1:3000 = 개발자들이 자신이 만든 서버 프로그램을 테스트하기 위한 용도
// (자기 자신 IP 주소).(포트 번호)

// 웹 개발 면접 단골 질문
// DNR(Domain Name Resolution)