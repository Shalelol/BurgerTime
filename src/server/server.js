const express = require('express');

const app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', (req, res) => {
  if(!req.query.time){
    res.render('create');
    return;
  }

  res.render('index')
});

const server = app.listen(3000, () => console.log('App listening at http://localhost:3000'));
