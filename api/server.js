const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', router);

app.listen(3001, () => {
  console.log('server listening on port 3011');
});
