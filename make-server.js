// 클라이언트와 서버가 통신하는데 필요한 코어 모듈
const http = require('http');

// 서버 역할을 하는 객체를 생성한다.
let server = http.createServer(
    // req: 클라이언트 요청에 관한 객체
    // res: 서버가 할 응답에 관한 객체
    function(req, res) {
        res.end('<h1>Hello world!</h1><h2>Your PORT Number is ' + PORT + '</h2>');
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