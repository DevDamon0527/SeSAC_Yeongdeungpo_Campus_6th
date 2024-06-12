const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public1'))


app.get('/', (req,res)=>{
    res.render('index', {title :'Home'})
})

app.get('/about', (req,res)=>{
    res.render('about', {title :'About'})
})

app.get('/create', (req,res)=>{
    res.render('create', {title :'Create'})
})


// 지정된 경로외 경로일때
app.use((req, res) => {
    res.status(404).render('404');
  });
  

app.listen(8000, () => {
    console.log(`http://localhost:8000`);
  });