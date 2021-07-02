// 코어 모듈(경로를 표시해줄 필요없다.)

// fs(file system): 파일이나 디렉토리에 관한 작업을 할때 필요한다.
const fs = require('fs');

// readdirSync: 파일 디렉토리 안에 있는 파일을 읽어주는 함수이다.
let fileList = fs.readdirSync('.');
console.log(fileList);

// writeFileSync('파일 이름', '파일 내용'): 파일 생성 함수이다.
fs.writeFileSync('new', 'Hello Node.js!');

// os(operating system): 운영체제관련 정보 받아오기
const os = require('os');

// cpus: cpu 정보 받아오기
console.log(os.cpus());