/**
 * ejs 는 템플릿으로 내용을 html 형식으로 변환된다
 * 파일 확장자는 ejs
 * 설치방법 : npm install ejs
 */
// index.ejs 파일과 함께 
const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine','ejs')
app.set('views','./views') // view를 불러오는 폴더 views -> views1 작동X


app.listen(3000, ()=>{
  console.log(`http://localhost:3000`)
})


app.get('/' , ( req, res)=>{
res.render('index', {title:'홈'});
})
// 여기까지 적고 nodemon app 엔터 브라우저에서 localhost 접속하면 바뀐 index.ejs 파일이 실행되는 것을 확인한다


app.get('/about' , ( req, res)=>{
 res.render('about', {title:'어바웃'})
  })
      
app.get('/create', (req, res)=>{
  res.render('create', {title:'작성하기'})
 })


app.use(( req, res)=>{
  res.status(404).render('404')
})
