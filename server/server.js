const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const restfulRouter = require('./routes/restful.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/products/', restfulRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});