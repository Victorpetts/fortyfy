const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ironmansux',
  database: 'fortyfy'
});

db.connect();

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users ORDER BY user_name ASC';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/friends', (req, res) => {
  const sql = 'SELECT * FROM users WHERE is_friend = 1 ORDER BY lvl DESC';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/ongoingtours', (req, res) => {
  const sql = 'SELECT * FROM tours WHERE status = 0 OR status = 1';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/finishedtours', (req, res) => {
  const sql = 'SELECT * FROM tours WHERE status = 2 OR status = 3';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/userstour', (req, res) => {
  const sql = 'SELECT * FROM usersTour';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/userstour/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const sql = 'SELECT * FROM usersTour WHERE tour_id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
