// fs(file system): 파일이나 디렉토리에 관한 작업을 할때 필요한다.
const fs = require('fs');

// 동기 실행
console.log('Start');

let content = fs.readFileSync('./new', 'utf8');
console.log(content);

console.log('Finish');

// 비동기 실행(중요)
console.log('Start');

fs.readFile('./new', 'utf8', (err, data) => {
    console.log(data);
})

console.log('Finish');