const http= require('http');
const server = http.createServer();

server.listen(8000, function(){
    console.log('서버실행')
})