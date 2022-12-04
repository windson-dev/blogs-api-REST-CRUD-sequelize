const express = require('express');

// ...
const loginRouter = require('./routers/loginRouter');

const userRouter = require('./routers/userRouter');

const categoryRouter = require('./routers/categoryRouter');

const postRouter = require('./routers/postRouter');

const app = express();

app.use(express.json());
// ...
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

module.exports = app;
