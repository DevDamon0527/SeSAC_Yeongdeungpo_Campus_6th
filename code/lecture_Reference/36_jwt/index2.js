const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'YhMrzgZ0G58moUhaYMxPUkG9JgEDfa5B';

const userInfo = { id: 'leader', pw: '1234', name: 'Damon' };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});
