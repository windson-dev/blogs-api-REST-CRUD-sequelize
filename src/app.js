const express = require('express');

// ...
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
