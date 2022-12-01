const express = require('express');

// ...
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use('/login', userRouter);

module.exports = app;
