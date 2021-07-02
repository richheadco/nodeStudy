let url = new URL('http://example.com/business/mart/item?category=14&id=2965');

// 클라이언트와 서버가 서로 통신을 할 때는 항상 정해진 '통신 규약' = protocol
console.log('url protocol: ' + url.protocol);
console.log('url host: ' + url.host);
console.log('url pathname: ' + url.pathname);
console.log('url search: ' + url.search);