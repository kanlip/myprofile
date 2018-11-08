const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    mongoose
      .connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true }
      )
      .then(console.log('Connected'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use('/work', require('./server/routes/work'));
    server.use(require('./server/routes/contact'));
    server.get('/kanpdf', (req, res) => {
      const tempFile = './static/Resume.pdf';
      fs.readFile(tempFile, function(err, data) {
        res.contentType('application/pdf');
        res.send(data);
      });
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on port 3000');
    });
  })
  .catch(exception => {
    console.error(exception.stack);
    process.exit(1);
  });
