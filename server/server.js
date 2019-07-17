const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const restfulRouter = require('./routes/restful.router');
const bodyParser = require('body-parser');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
/**-----------SERVE STATIC FILES-------- */
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/products/', restfulRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});