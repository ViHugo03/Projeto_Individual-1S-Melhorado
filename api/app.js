const express = require('express');
const cors = require('cors');
const usuarioRouter = require('./rest-api/router/UserRouter');
const app = express();
const port = 3300;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api', usuarioRouter);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});