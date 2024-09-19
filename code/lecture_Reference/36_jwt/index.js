const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'JzdWIiOiIxMjM0NTY3ODkwIiwi';

const userInfo = { id: 'leader', pw: '1234', name: 'Damon' };

app.set('view engin', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req,res) => {
    try{
        const {id, pw} = req.body;
    }
})
